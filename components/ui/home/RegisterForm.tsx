"use client";

import Button from "@/components/common/Button";
import { useForm } from "react-hook-form";

interface Props {
  handleSetWhichForm: (newWhichForm: string) => void;
}

interface FormData {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
  birthDate: string;
}

export default function RegisterForm({ handleSetWhichForm }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="text-text flex flex-col items-start justify-center w-[25rem] gap-2 p-2 z-50"
    >
      <div className="flex items-center w-full">
        <div className="flex flex-col items-start gap-0.5 w-[50%]">
          <label htmlFor="name" className="text-sm">
            Name and surname
          </label>
          <input
            id="name"
            type="text"
            {...register("name", { required: "This area required" })}
            className="outline-none bg-background rounded-md w-full text-sm p-2"
          />
          <p
            className={`text-red-400 text-xs transition-opacity mt-1 ${
              errors.name?.message ? "opacity-100" : "opacity-0"
            }`}
          >
            * {errors?.name?.message ? errors.name.message : "----------"}
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
            {errors?.password?.message ? errors.password.message : "----------"}
          </p>
        </div>

        <div className="flex flex-col items-start gap-0.5 w-full">
          <label htmlFor="confirmPassword" className="text-sm">
            Confirm password
          </label>
          <input
            id="confirmPassword"
            type="password"
            {...register("confirmPassword", { required: "This area required" })}
            className="outline-none bg-background rounded-md w-full text-sm p-2"
          />
          <p
            className={`text-red-400 text-xs transition-opacity mt-1 ${
              errors.confirmPassword?.message ? "opacity-100" : "opacity-0"
            }`}
          >
            *{" "}
            {errors?.confirmPassword?.message
              ? errors.confirmPassword.message
              : "----------"}
          </p>
        </div>

        <div className="flex flex-col items-start gap-0.5 w-[50%]">
          <div className="flex flex-col items-start gap-0.5 w-[50%]">
            <label htmlFor="name" className="text-sm">
              Birth date
            </label>
            <input
              id="birthDate"
              type="date"
              {...register("birthDate", { required: "This area required" })}
              className="outline-none bg-background rounded-md w-full text-sm p-2"
            />
            <p
              className={`text-red-400 text-xs transition-opacity mt-1 ${
                errors.birthDate?.message ? "opacity-100" : "opacity-0"
              }`}
            >
              *{" "}
              {errors?.birthDate?.message
                ? errors.birthDate.message
                : "----------"}
            </p>
          </div>
        </div>
      </div>

      <Button className="bg-accent border-2 transition-all border-accent hover:bg-white rounded-full px-5 py-1.5 mt-3">
        Register
      </Button>
      <p className="text-sm">
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
