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

            if (!token) {
                if (!refresh_token) {
                    return NextResponse.redirect(new URL("/", req.url));
                }

                const result = await verifyToken(refresh_token, process.env.JWT_SECRET)

                const user = await prisma.user.findUnique({
                    where: { id: Number(result.id) },
                })

                if (user) {
                    const newTokens = await jwtSign(user.id, process.env.JWT_SECRET, user.role);

                    await prisma.user.update({
                        where: { id: user.id },
                        data: { refresh_token: newTokens.jwtRefresh },
                    });

                    const response = NextResponse.next();
                    response.cookies.set("access_token", newTokens.jwtAccess, { httpOnly: true, secure: process.env.NODE_ENV === "production", maxAge: 60 * 60 });
                    response.cookies.set("refresh_token", newTokens.jwtRefresh, { httpOnly: true, secure: process.env.NODE_ENV === "production", maxAge: 60 * 60 * 24 * 7 });

                    if (url.pathname.startsWith("/admin") && user.role !== "ADMIN") {
                        return NextResponse.redirect(new URL("/unauthorized", req.url));
                    }

                    if (url.pathname.startsWith("/seller") && user.role !== "SELLER" && result.role !== "ADMIN") {
                        return NextResponse.redirect(new URL("/unauthorized", req.url));
                    }

                    if (url.pathname.startsWith("/profile") && user.role !== "SELLER" && result.role !== "ADMIN" && result.role !== "USER") {
                        return NextResponse.redirect(new URL("/unauthorized", req.url));
                    }
                }

            }

            if (token) {

                const result = await verifyToken(token, process.env.JWT_SECRET)

                if (url.pathname.startsWith("/admin") && result.role !== "ADMIN") {
                    return NextResponse.redirect(new URL("/unauthorized", req.url));
                }


                if (url.pathname.startsWith("/seller") && result.role !== "SELLER" && result.role !== "ADMIN") {
                    return NextResponse.redirect(new URL("/unauthorized", req.url));
                }

                if (url.pathname.startsWith("/profile") && result.role !== "SELLER" && result.role !== "ADMIN" && result.role !== "USER") {
                    return NextResponse.redirect(new URL("/unauthorized", req.url));
                }
            }

        } catch (error) {

            return NextResponse.redirect(new URL("/", req.url));
        }
    }
}

// Determine which routes the middleware will run on
export const config = {
    matcher: ["/admin/:path*", "/seller/:path*", "/profile/:path*"],
};