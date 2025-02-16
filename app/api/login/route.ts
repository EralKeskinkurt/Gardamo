import { PrismaClient, User } from "@prisma/client";
import { PrismaClientValidationError } from "@prisma/client/runtime/library";
import bcryptjs from "bcryptjs";
import { jwtSign } from "@/utils/useJwt";

const prisma = new PrismaClient();

export async function POST(
    req: Request
) {
    if (process.env.JWT_SECRET) {
        try {
            const { email, password }: Pick<User, "email" | "password"> = await req.json();

            console.log(password, email);

            const user = await prisma.user.findUnique({
                where: { email },
            })

            if (!user) {
                return Response.json({ message: "User not found" }, { status: 404 });
            }

            const passwordMatch = bcryptjs.compare(password, user.password)

            if (!passwordMatch) {
                return Response.json({ message: "Wrong password" }, { status: 404 });
            }

            const token = await jwtSign(user.id, user.role);

            await prisma.user.updateMany({ where: { email: user.email }, data: { refresh_token: token.jwtRefresh } })

            const newUser = await prisma.user.findUnique({
                where: { email: email },
            });

            const response = Response.json({ message: "User login successfully", user: newUser }, { status: 200 });

            response.headers.append("Set-Cookie", `access_token=${token.jwtAccess}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=3600`);

            response.headers.append("Set-Cookie", `refresh_token=${token.jwtRefresh}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=31104000`);

            return response

        } catch (error) {

            if (error instanceof PrismaClientValidationError) {


                return Response.json({ message: error.message }, { status: 500 });

            }

            return Response.json({ message: error }, { status: 500 });
        }
    }
}