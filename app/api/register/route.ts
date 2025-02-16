
import { PrismaClient, User } from "@prisma/client";
import { PrismaClientValidationError } from "@prisma/client/runtime/library";
import bcryptjs from "bcryptjs";
import { jwtSign } from "@/utils/useJwt";

const prisma = new PrismaClient();

export async function POST(
    req: Request,
) {
    if (process.env.JWT_SECRET)
        try {

            const { password, email, birth_date, ...user }: User = await req.json();

            const isoDate = new Date(birth_date).toISOString()

            const anyUser = await prisma.user.findUnique({
                where: { email }
            })

            if (anyUser) {
                return Response.json({ message: "Email already in use" }, { status: 405 });
            }

            const hashedPassword = await bcryptjs.hash(password, 10)



            const createUser = await prisma.user.create({
                data: {
                    email,
                    birth_date: isoDate,
                    password: hashedPassword,
                    ...user
                }
            })


            const token = jwtSign(createUser.id, process.env.JWT_SECRET, createUser.role);

            await prisma.user.updateMany({ where: { email: createUser.email }, data: { refresh_token: token.jwtRefresh } })

            const newUser = await prisma.user.findUnique({
                where: { email: email },
            });

            const response = Response.json({ message: "User created successfully", user: newUser }, { status: 200 });

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