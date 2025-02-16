import axiosInstance from "@/utils/axiosInstance";
import { User } from "@prisma/client";

interface FormData {
    email: string;
    name_surname: string;
    password: string;
    confirm_password: string;
    birth_date: string;
    phone_number: number;
}

export const authRegister = async (data: FormData) => {

    if (!data) return;


    try {
        const { confirm_password, ...user } = data;

        const result = await axiosInstance.post("/register", user);

        return result.data.user
    } catch (error) {
        return error
    }
}


export const authLogin = async (data: Pick<FormData, "email" | "password">) => {
    if (!data) return

    try {
        const { email, password } = data

        const result = await axiosInstance.post("/login", { email, password });

        return result.data.user.role
    } catch (error) {
        return error;
    }
}
