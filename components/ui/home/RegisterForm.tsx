"use client";
import Button from "@/components/common/Button";
import { authRegister } from "@/lib/authService";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "@/validations/authSchema";
import { useState } from "react";
import { formatPhoneNumber } from "@/lib/formatPhoneNumber";

interface Props {
  handleSetWhichForm: (_value: string) => void;
}

interface FormData {
  email: string;
  name_surname: string;
  password: string;
  confirm_password: string;
  birth_date: string;
  phone_number: number;
}

export default function RegisterForm({ handleSetWhichForm }: Props) {
  const [phone, setPhone] = useState("");
  const [load, setLoad] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setPhone(formatted);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (formData: FormData) => {
    try {
      setLoad(true);
      await authRegister(formData);
    } catch (error) {
      return error;
    } finally {
      setLoad(false);
      handleSetWhichForm("");
      reset();
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="text-text flex flex-col items-start justify-center w-[30rem] gap-2 p-2 z-50"
    >
      <div className="flex items-start w-full gap-5">
        <div className="flex flex-col items-start w-[50%]">
          <div className="flex flex-col items-start gap-0.5 w-full">
            <label htmlFor="name_surname" className="text-sm">
              Name and surname
            </label>
            <input
              id="name_surname"
              type="text"
              {...register("name_surname", {
                required: "This area required",
                max: 40,
                min: 6,
              })}
              className="outline-none bg-background rounded-md w-full text-sm p-2"
            />
            <p
              className={`text-red-400 text-xs transition-opacity mt-1 ${
                errors.name_surname?.message ? "opacity-100" : "opacity-0"
              }`}
            >
              *{" "}
              {errors?.name_surname?.message
                ? errors.name_surname.message
                : "----------"}
            </p>
          </div>

          <div className="flex flex-col items-start gap-0.5 w-full">
            <label htmlFor="email" className="text-sm">
              E-mail
            </label>
            <input
              id="email"
              type="email"
              {...register("email", { required: "This area required" })}
              className="outline-none bg-background rounded-md w-full text-sm p-2"
            />
            <p
              className={`text-red-400 text-xs transition-opacity mt-1 ${
                errors.email?.message ? "opacity-100" : "opacity-0"
              }`}
            >
              * {errors?.email?.message ? errors.email.message : "----------"}
            </p>
          </div>

          <div className="flex flex-col items-start gap-0.5 w-full">
            <label htmlFor="password" className="text-sm">
              Password
            </label>
            <input
              id="password"
              type="password"
              {...register("password", {
                required: "This area required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              className="outline-none bg-background rounded-md w-full text-sm p-2"
            />
            <p
              className={`text-red-400 text-xs transition-opacity mt-1 ${
                errors.password?.message ? "opacity-100" : "opacity-0"
              }`}
            >
              *{" "}
              {errors?.password?.message
                ? errors.password.message
                : "----------"}
            </p>
          </div>

          <div className="flex flex-col items-start gap-0.5 w-full">
            <label htmlFor="confirm_password" className="text-sm">
              Confirm password
            </label>
            <input
              id="confirm_password"
              type="password"
              {...register("confirm_password", {
                required: "This area required",
              })}
              className="outline-none bg-background rounded-md w-full text-sm p-2"
            />
            <p
              className={`text-red-400 text-xs transition-opacity mt-1 ${
                errors.confirm_password?.message ? "opacity-100" : "opacity-0"
              }`}
            >
              *{" "}
              {errors?.confirm_password?.message
                ? errors.confirm_password.message
                : "----------"}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start gap-0.5 w-[50%]">
          <div className="flex flex-col items-start gap-0.5 w-full">
            <label htmlFor="name" className="text-sm">
              Birth date
            </label>
            <input
              id="birthDate"
              type="date"
              {...register("birth_date", { required: "This area required" })}
              className="outline-none bg-background rounded-md w-full text-sm p-2"
            />
            <p
              className={`text-red-400 text-xs transition-opacity mt-1 ${
                errors.birth_date?.message ? "opacity-100" : "opacity-0"
              }`}
            >
              *{" "}
              {errors?.birth_date?.message
                ? errors.birth_date.message
                : "----------"}
            </p>
          </div>
          <div className="flex flex-col items-start gap-0.5 w-full">
            <label htmlFor="name" className="text-sm">
              Phone number
            </label>
            <input
              type="text"
              {...register("phone_number")}
              value={phone}
              onChange={handleChange}
              className="outline-none bg-background rounded-md w-full text-sm p-2"
              placeholder="(5XX)-XXX-XXXX"
            />
            <p
              className={`text-red-400 text-xs transition-opacity mt-1 ${
                errors.phone_number?.message ? "opacity-100" : "opacity-0"
              }`}
            >
              *{" "}
              {errors?.phone_number?.message
                ? errors.phone_number.message
                : "----------"}
            </p>
          </div>
        </div>
      </div>

      <Button className="bg-accent border-2 transition-all border-accent hover:bg-white rounded-full px-5 py-1.5 ">
        {load ? "..." : "Register"}
      </Button>
      <p className="text-sm mt-2">
        I already have an account;
        <span
          onClick={() => handleSetWhichForm("login-form")}
          className="text-accent cursor-pointer hover:underline-offset-3 hover:underline hover:text-primary"
        >
          {" "}
          login.
        </span>
      </p>
    </form>
  );
}
