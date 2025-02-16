import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "./utils/useJwt";

export async function middleware(req: NextRequest) {
    try {
        const token = req.cookies.get("access_token")?.value;

        if (!token) {
            return NextResponse.redirect(new URL("/", req.url));
        }

        const result = await verifyToken(token)

        const url = req.nextUrl;

        if (url.pathname.startsWith("/admin") && result.roleDb !== "ADMIN") {
            return NextResponse.redirect(new URL("/unauthorized", req.url));
        }


        if (url.pathname.startsWith("/seller") && result.roleDb !== "SELLER" && result.roleDb !== "ADMIN") {
            return NextResponse.redirect(new URL("/unauthorized", req.url));
        }

        // USER Authorization
        if (url.pathname.startsWith("/profile") && result.roleDb !== "SELLER" && result.roleDb !== "ADMIN" && result.roleDb !== "USER") {
            return NextResponse.redirect(new URL("/unauthorized", req.url));
        }

        // return NextResponse.next();
    } catch (error) {
        console.log(error)
        return
    }
}

// Determine which routes the middleware will run on
export const config = {
    matcher: ["/admin/:path*", "/seller/:path*", "/profile/:path*"],
};