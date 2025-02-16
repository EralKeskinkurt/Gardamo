import * as z from "zod";

export const registerSchema = z
    .object({
        email: z.string().email("Please enter a valid e-mail address"),
        name_surname: z
            .string()
            .max(50, "Your name and surname cannot exceed 50 characters")
            .min(5, "Your name and surname cannot be less than 5 characters"),
        password: z
            .string()
            .max(50, "Your password cannot exceed 50 characters")
            .min(6, "Your password cannot be less than 5 characters"),
        confirm_password: z.string(),
        birth_date: z.string().refine(
            (date) => {
                const userDate = new Date(date);
                const today = new Date();
                const minDate = new Date();
                minDate.setFullYear(today.getFullYear() - 18);

                return userDate <= minDate;
            },
            { message: "You must be at least 18 years old" }
        ),
        phone_number: z.string().regex(/^\d{3} \d{3} \d{4}$/, {
            message: "Phone number must be in the format XXX XXX XXXX",
        }),
    })
    .refine((data) => data.password === data.confirm_password, {
        message: "Passwords do not match.",
        path: ["confirm_password"],
    });



export const loginSchema = z
    .object({
        email: z.string().email("Please enter a valid e-mail address"),
        password: z
            .string()
            .max(50, "Your password cannot exceed 50 characters")
            .min(6, "Your password cannot be less than 5 characters"),
    })