import Image from "next/image";
import GardamoLogo from "../../public/logo.svg";
import Link from "next/link";
import Button from "../common/Button";
import { IoIosBasket } from "react-icons/io";
import { TiShoppingCart } from "react-icons/ti";
import SearchInput from "../common/SearchInput";
import CategoriesDropdown from "./CategoriesDropdown";
import { IoMdArrowDropdown } from "react-icons/io";

export default function Navbar() {
  return (
    <nav className="w-full bg-background/80 sticky top-0 right-0 z-50 max-lg:hidden">
      <div className="w-full container mx-auto flex justify-between items-center px-10">
        <Image src={GardamoLogo} alt="Gardamo Logo" />
        <SearchInput />
        <ul className="flex items-center gap-4">
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
          <li className="group relative">
            <Button className="bg-primary text-white group-hover:bg-white group-hover:text-text border-2 text-sm border-primary font-medium flex items-center gap-1.5">
              Categories{" "}
              <IoMdArrowDropdown
                size={20}
                className="group-hover:rotate-180 transition-transform"
              />
            </Button>
            <CategoriesDropdown />
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
