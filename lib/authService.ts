import { authStore } from "@/store/authStore";
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



export const authRegister = async (formData: FormData) => {

    if (!formData) return;
    const setUser = authStore((state) => state.setUser)
    try {
        const { confirm_password: _, ...user } = formData;

        const { data } = await axiosInstance.post<User>("/auth/register", user);

        setUser(data)

        return

    } catch (error) {

        return error
    }
}


export const authLogin = async (formData: Pick<FormData, "email" | "password">) => {

    if (!formData) return

    try {

        const { email, password } = formData

        const { data } = await axiosInstance.post("/auth/login", { email, password });

        return data

    } catch {

        return null;
    }
}


export const logOut = async () => {
    try {
        const result = await axiosInstance.post("/auth/logout")
        return result;
    } catch (error) {
        return error
    }

}
