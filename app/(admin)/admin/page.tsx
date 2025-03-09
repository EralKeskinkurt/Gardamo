"use client";
import { authStore } from "@/store/authStore";

export default function DashboardPage() {
  const user = authStore((state) => state.user);

  if (!user) return <p>Yükleniyor...</p>; // ✅ Kullanıcı bilgisi gelene kadar yükleme mesajı göster

  return (
    <div>
      <h1>Admin Paneli</h1>
      <p>{`${user.email} - ${user.name_surname}`}</p>
    </div>
  );
}
