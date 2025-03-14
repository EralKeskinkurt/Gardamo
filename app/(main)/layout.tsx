import type { Metadata } from "next";
import "../globals.css";
import Navbar from "@/components/ui/Navbar";
import MobileNav from "@/components/ui/MobileNav";
import Footer from "@/components/ui/home/Footer";
import AuthProvider from "@/components/provider/AuthProvider";

export const metadata: Metadata = {
  title: "Gardamo",
  description: "Gardamo e-commerce",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background">
        <AuthProvider>
          <div className="relative w-full h-full">
            <Navbar />
            <MobileNav />
            <main>{children}</main>
            <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
