import Image from "next/image";
import GardamoLogo from "@/public/logo.svg";

export default function Footer() {
  return (
    <footer className=" bg-accent text-text  w-full py-10">
      <div className="container mx-auto">
        <div className="md:w-1/4">
          <div>
            <Image src={GardamoLogo} alt="Gardamo Logo" className="w-64 h-32" />
          </div>

          <p className="text-sm leading-relaxed">
            Gardamo is an e-commerce platform that offers high-quality products
            at affordable prices, with a focus on customer satisfaction.
          </p>
        </div>
      </div>
    </footer>
  );
}
