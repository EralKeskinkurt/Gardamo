export async function POST() {
    if (process.env.JWT_SECRET) {
        try {
            const response = Response.json({ message: "User logged out successfully" }, { status: 200 });

            response.headers.append("Set-Cookie", "access_token=; Max-Age=0; path=/; HttpOnly; Secure; SameSite=Strict");
            response.headers.append("Set-Cookie", "refresh_token=; Max-Age=0; path=/; HttpOnly; Secure; SameSite=Strict")

            return response;
        } catch (error) {
            return Response.json({ message: error }, { status: 500 });
        }
    }
}