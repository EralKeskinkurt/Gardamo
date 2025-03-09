
import { PrismaClientValidationError } from "@prisma/client/runtime/library";
import { PrismaClient } from "@prisma/client";
import { verifyToken } from "@/utils/useJwt";
import { NextRequest } from "next/server";

const prisma = new PrismaClient();

export async function GET(
    req: NextRequest,
) {
    if (process.env.JWT_SECRET)
        try {

            const token = req.cookies.get("access_token")?.value;

            if (!token) {
                return Response.json({ user: null }, { status: 401 });
            }

            const result = await verifyToken(token, process.env.JWT_SECRET);

            const user = await prisma.user.findUnique({
                where: { id: Number(result.idDb) },
            })

            if (user) {
                const { password: _password, refresh_token: _refresh_token, ...safeUser } = user;

                return Response.json({ user: safeUser }, { status: 200 });

            } else {

                return Response.json({ message: "User not found" }, { status: 404 });
            }


        } catch (error) {

            if (error instanceof PrismaClientValidationError) {


                return Response.json({ message: error.message }, { status: 500 });

            }

            return Response.json({ message: error }, { status: 500 });

        }

}