import { SignJWT, jwtVerify } from "jose";

export const jwtSign = async (idDb: number, roleDb: "USER" | "ADMIN" | "SELLER") => {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET!);
    const access_token = await new SignJWT({ idDb, roleDb })
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime("2h")
        .sign(secret);
    const refresh_token = await new SignJWT({ idDb, roleDb })
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime("2h")
        .sign(secret);

    return { jwtAccess: access_token, jwtRefresh: refresh_token };
}

export const verifyToken = async (jwtAccessToken: string) => {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET!);
    const { payload } = await jwtVerify(jwtAccessToken, secret);
    return payload;
}