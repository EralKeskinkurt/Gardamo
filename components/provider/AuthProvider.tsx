"use client";
import { authStore } from "@/store/authStore";
import axiosInstance from "@/utils/axiosInstance";
import { useEffect, useState } from "react";
import Loader from "../common/Loader";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState<boolean>(true);
  const setUser = authStore((state) => state.setUser);

  useEffect(() => {
    const getUser = async () => {
      try {
        setLoading(true);
        const { data } = await axiosInstance.get("/user");
        setUser(data.user);
      } catch (error) {
        console.error("User not found:", error);
      } finally {
        setLoading(false);
      }
    };
    getUser();
  }, [setUser]);

  return (
    <>
      {loading && <Loader />}
      {!loading && children}
    </>
  );
}
