"use client";
import { authStore } from "@/store/authStore";

export default function DashboardPage() {
  const user = authStore((state) => state.user);

  return (
    <div>
      <h1>Admin Paneli</h1>
      <p>{`${user?.email} - ${user?.name_surname}`}</p>
    </div>
  );
}
