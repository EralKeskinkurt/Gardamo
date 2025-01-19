import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";

export const metadata: Metadata = {
  title: "Gardamo",
  description: "Gardamo e-commerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background">
        <div className="relative w-full min-h-screen ">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
