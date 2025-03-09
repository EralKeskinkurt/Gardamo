import type { Metadata } from "next";
import "../globals.css";
import AuthProvider from "@/components/provider/AuthProvider";

export const metadata: Metadata = {
  title: "Gardamo Admin",
  description: "Gardamo e-commerce admin",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <div className="relative w-full h-full">{children}</div>
        </AuthProvider>
      </body>
    </html>
  );
}
