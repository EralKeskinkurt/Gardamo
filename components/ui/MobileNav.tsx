import Link from "next/link";
import Button from "../common/Button";
import { TiShoppingCart } from "react-icons/ti";
import { IoIosBasket } from "react-icons/io";
import GardomoLogo from "@/public/logo.svg";
import Image from "next/image";
export default function MobileNav() {
  return (
    <nav className="w-full bg-background/80 sticky top-0 right-0 z-50 hidden max-lg:block">
      <div className="w-full container mx-auto flex justify-between items-center px-10 max-md:px-5">
        <Image
          src={GardomoLogo}
          alt="Gardamo Logo"
          className="max-lg:w-64 max-md:w-52 max-sm:w-40"
        />
        <ul className="hidden items-center gap-4">
          <li>
            <Button className="bg-primary text-white hover:bg-white hover:text-text border-2 text-sm border-primary font-medium">
              <Link href={"/"}>Home</Link>
            </Button>
          </li>
          <li>
            <Button className="bg-primary text-white hover:bg-white hover:text-text border-2 text-sm border-primary font-medium flex items-center gap-1.5">
              <Link href={"/"}>Shop</Link>
              <TiShoppingCart />
            </Button>
          </li>
          <li>
            <Button className="bg-primary text-white hover:bg-white hover:text-text border-2 text-sm border-primary font-medium">
              <Link href={"/"}>Categories</Link>
            </Button>
          </li>
          <li>
            <Button className="bg-primary text-white hover:bg-white hover:text-text border-2 text-sm border-primary font-medium flex items-center gap-1.5">
              <Link href={"/"}>Cart</Link>
              <IoIosBasket />
            </Button>
          </li>
          <li>
            <Button className="bg-secondary text-text hover:bg-white border-2 text-sm border-secondary font-medium">
              <Link href={"/login"}>Login / Register</Link>
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
