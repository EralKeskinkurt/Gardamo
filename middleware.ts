import { NextRequest, NextResponse } from "next/server";
import { verifyToken, jwtSign } from "./utils/useJwt";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function middleware(req: NextRequest) {
    if (process.env.JWT_SECRET) {
        try {
            const token = req.cookies.get("access_token")?.value;
            const refresh_token = req.cookies.get("refresh_token")?.value;

            const url = req.nextUrl;

            // Eğer access_token yoksa, refresh_token kontrol et
            if (!token) {
                if (!refresh_token) {
                    if (!url.pathname.startsWith("/")) {
                        // Eğer access_token ve refresh_token yoksa, kullanıcıyı login sayfasına yönlendir
                        return NextResponse.redirect(new URL("/", req.url));
                    }
                    return
                }

                // Refresh token ile doğrulama yap
                const result = await verifyToken(refresh_token, process.env.JWT_SECRET);

                const user = await prisma.user.findUnique({
                    where: { id: Number(result.idDb) },
                });

                if (user) {
                    const newTokens = await jwtSign(user.id, process.env.JWT_SECRET, user.role);

                    // Yeni tokenları kullanıcıya kaydet
                    await prisma.user.update({
                        where: { id: user.id },
                        data: { refresh_token: newTokens.jwtRefresh },
                    });

                    // Yeni response oluştur
                    const response = NextResponse.next();

                    // Yeni access_token ve refresh_token çerezlerine kaydet
                    response.cookies.set("access_token", newTokens.jwtAccess, {
                        httpOnly: true,
                        secure: process.env.NODE_ENV === "production",
                        maxAge: 60 * 60,
                    });

                    response.cookies.set("refresh_token", newTokens.jwtRefresh, {
                        httpOnly: true,
                        secure: process.env.NODE_ENV === "production",
                        maxAge: 60 * 60 * 24 * 7,
                    });

                    // Kullanıcı yetkilerini kontrol et ve yönlendir
                    if (url.pathname.startsWith("/admin") && user.role !== "ADMIN") {
                        return NextResponse.redirect(new URL("/unauthorized", req.url));
                    }

                    if (url.pathname.startsWith("/seller") && user.role !== "SELLER" && result.role !== "ADMIN") {
                        return NextResponse.redirect(new URL("/unauthorized", req.url));
                    }

                    if (url.pathname.startsWith("/profile") && user.role !== "SELLER" && result.role !== "ADMIN" && result.role !== "USER") {
                        return NextResponse.redirect(new URL("/unauthorized", req.url));
                    }

                    return response; // Yönlendirme yapılmadıysa, kullanıcıyı devam ettir
                }

            } else { // Eğer access_token varsa
                const result = await verifyToken(token, process.env.JWT_SECRET);

                // Kullanıcı yetkilerini kontrol et ve yönlendir
                if (url.pathname.startsWith("/admin") && result.role !== "ADMIN") {
                    return NextResponse.redirect(new URL("/unauthorized", req.url));
                }

                if (url.pathname.startsWith("/seller") && result.role !== "SELLER" && result.role !== "ADMIN") {
                    return NextResponse.redirect(new URL("/unauthorized", req.url));
                }

                if (url.pathname.startsWith("/profile") && result.role !== "SELLER" && result.role !== "ADMIN" && result.role !== "USER") {
                    return NextResponse.redirect(new URL("/unauthorized", req.url));
                }

                // Eğer access_token geçerliyse, işlemi sürdür
                return NextResponse.next();
            }
        } catch {

            return NextResponse.redirect(new URL("/", req.url));
        }
    }
}

// Middleware hangi yollar üzerinde çalışacak
export const config = {
    matcher: ["/admin/:path*", "/seller/:path*", "/profile/:path*", "/:path*"],
};
