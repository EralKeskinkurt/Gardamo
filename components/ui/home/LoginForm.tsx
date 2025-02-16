"use client";
import Button from "@/components/common/Button";
import { authLogin } from "@/lib/authService";
import { loginSchema } from "@/validations/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

interface Props {
  handleSetWhichForm: (newWhichForm: string) => void;
}

interface FormData {
  email: string;
  password: string;
}

export default function LoginForm({ handleSetWhichForm }: Props) {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const role = await authLogin(data);
      console.log(role);
      if (role === "USER") {
        router.push("/");
      } else if (role === "SELLER") {
        router.push("/seller");
      } else if (role === "ADMIN") {
        router.push("/admin");
      }

      handleSetWhichForm("");
    } catch (error) {
      return error;
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="text-text flex flex-col items-start justify-center p-2 z-50"
    >
      <div className="flex flex-col items-start gap-0.5 w-full">
        <label>E-mail </label>
        <input
          {...register("email", { required: "E-mail is required" })}
          type="email"
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
      <div className="flex flex-col items-start gap-0.5 mt-2.5 w-full">
        <label>Password </label>
        <input
          {...register("password", { required: "Password is required" })}
          type="password"
          className="outline-none bg-background rounded-md w-full text-sm p-2"
        />
        <p
          className={`text-red-400 text-xs transition-opacity mt-1 ${
            errors.password?.message ? "opacity-100" : "opacity-0"
          }`}
        >
          * {errors?.password?.message ? errors.password.message : "----------"}
        </p>
      </div>
      <span className="text-xs flex items-center gap-2 mt-1">
        <input type="checkbox" /> Remember me
      </span>
      <Button className="bg-accent border-2 transition-all border-accent hover:bg-white rounded-full px-5 py-1.5 mt-3">
        Login
      </Button>
      <p className="text-sm mt-3">
        Don&apos;t you have an account on Gardamo yet?
        <span
          onClick={() => handleSetWhichForm("register-form")}
          className="text-accent cursor-pointer hover:underline-offset-3 hover:underline hover:text-primary"
        >
          {" "}
          register.
        </span>
      </p>
    </form>
  );
}
