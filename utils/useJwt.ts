import { SignJWT, jwtVerify } from "jose";

export const jwtSign = async (idDb: number, JWT_SECRET: string, role: string) => {
    const secret = new TextEncoder().encode(JWT_SECRET);
    const access_token = await new SignJWT({ idDb, role })
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime("2h")
        .sign(secret);
    const refresh_token = await new SignJWT({ idDb, role })
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime("2h")
        .sign(secret);

    return { jwtAccess: access_token, jwtRefresh: refresh_token };
}

export const verifyToken = async (jwtAccessToken: string, JWT_SECRET: string) => {
    const secret = new TextEncoder().encode(JWT_SECRET);
    const { payload } = await jwtVerify(jwtAccessToken, secret);
    return payload;
}