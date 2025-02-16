import type { Metadata } from "next";
import "../globals.css";

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
        <div className="relative w-full h-full">{children}</div>
      </body>
    </html>
  );
}
