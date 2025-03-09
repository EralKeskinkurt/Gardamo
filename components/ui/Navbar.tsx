"use client";
import Image from "next/image";
import GardamoLogo from "../../public/logo.svg";
import Link from "next/link";
import { IoIosBasket } from "react-icons/io";
import { TiShoppingCart } from "react-icons/ti";
import SearchInput from "../common/SearchInput";
import CategoriesDropdown from "./CategoriesDropdown";
import { IoMdArrowDropdown } from "react-icons/io";
import DefaultModal from "../common/DefaultModal";
import LoginForm from "./home/LoginForm";
import { useState } from "react";
import RegisterForm from "./home/RegisterForm";
import Button from "../common/Button";
import NavProfile from "./NavProfile";
import { authStore } from "@/store/authStore";

export default function Navbar() {
  const [whichForm, setWhichForm] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const user = authStore((state) => state.user);
  const handleSetWhichForm = (whichFormData: string) => {
    setWhichForm(whichFormData);

    if (whichFormData === "") {
      setIsModalOpen(false);
    }
  };

  const handleSetIsModalOpen = (isModalOpenData: boolean) => {
    setWhichForm("");
    setIsModalOpen(isModalOpenData);
  };

  return (
    <nav className="w-full bg-background/80 sticky top-0 right-0 z-10 max-lg:hidden">
      <div className="w-full container mx-auto flex justify-between items-center px-10">
        <Image src={GardamoLogo} alt="Gardamo Logo" />
        <SearchInput />
        <ul className="flex items-center gap-4">
          <li>
            <Link
              href={"/"}
              className="bg-primary text-white hover:bg-white hover:text-text border-2 text-sm border-primary font-medium rounded-3xl px-4 py-1.5 transition-all"
            >
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link
              href={"/shop"}
              className="bg-primary text-white hover:bg-white hover:text-text border-2 text-sm border-primary font-medium flex items-center gap-1.5 rounded-3xl px-4 py-1.5 transition-all"
            >
              <span>Shop</span>
              <TiShoppingCart />
            </Link>
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
            <Link
              href={"/"}
              className="bg-primary text-white hover:bg-white hover:text-text border-2 text-sm border-primary font-medium flex items-center gap-1.5 rounded-3xl px-4 py-1.5 transition-all"
            >
              <span>Cart</span>
              <IoIosBasket />
            </Link>
          </li>

          {user && <NavProfile />}

          {!user && (
            <li>
              <Button
                onClick={() => {
                  handleSetWhichForm("login-form");
                  setIsModalOpen(true);
                }}
                className="bg-secondary text-text hover:bg-white border-2 text-sm border-secondary font-medium"
              >
                Login / Register
              </Button>
              {isModalOpen && (
                <DefaultModal handleSetIsModalOpen={handleSetIsModalOpen}>
                  {whichForm === "login-form" ? (
                    <LoginForm handleSetWhichForm={handleSetWhichForm} />
                  ) : (
                    <RegisterForm handleSetWhichForm={handleSetWhichForm} />
                  )}
                </DefaultModal>
              )}
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
