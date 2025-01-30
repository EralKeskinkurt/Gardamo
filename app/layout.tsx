import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import MobileNav from "@/components/ui/MobileNav";
import Footer from "@/components/ui/home/Footer";

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
        <div className="relative w-full">
          <Navbar />
          <MobileNav />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
