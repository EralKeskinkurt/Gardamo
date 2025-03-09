import GardamoLogo from "@/public/logo.svg";
import Image from "next/image";
export default function Loader() {
  return (
    <div className="w-full h-full flex fixed top-0 right-0 items-center justify-center bg-background z-50">
      <Image
        className="animate-pulse w-96"
        src={GardamoLogo}
        alt="gardamo logo"
      />
    </div>
  );
}
