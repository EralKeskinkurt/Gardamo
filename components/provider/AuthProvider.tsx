"use client";
import { authStore } from "@/store/authStore";
import axiosInstance from "@/utils/axiosInstance";
import { useEffect } from "react";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const setUser = authStore((state) => state.setUser);

  useEffect(() => {
    const getUser = async () => {
      try {
        const { data } = await axiosInstance.get("/user");
        setUser(data.user);
      } catch (error) {
        console.error("User not found:", error);
      }
    };
    getUser();
  }, [setUser]);

  return <>{children}</>;
}
