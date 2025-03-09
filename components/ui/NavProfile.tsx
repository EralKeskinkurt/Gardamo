"use client";
import { authStore } from "@/store/authStore";
import Link from "next/link";
import Image from "next/image";
import { GoHeartFill } from "react-icons/go";
import { TbBasketFilled } from "react-icons/tb";
import { MdOutlineManageAccounts } from "react-icons/md";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { logOut } from "@/lib/authService";

export default function NavProfile() {
  const user = authStore((state) => state.user);
  const clearUser = authStore((state) => state.clearUser);

  const logOutUser = async () => {
    try {
      const result = await logOut();
      if (result) {
        clearUser();
      }
    } catch (_error) {
      return;
    }
  };

  if (user)
    return (
      <div className="relative group">
        <span className="w-12 h-12 cursor-pointer rounded-full border-4 border-secondary flex items-center justify-center focus:outline-none overflow-hidden">
          <Image
            src={`${user.image ? user.image : "/profile.png"}`}
            alt="User Image"
            className="object-cover"
            height={400}
            width={400}
          />
        </span>
        <div className="absolute right-0 hidden group-hover:block pt-2">
          <div className="flex-col items-start bg-white border rounded-lg shadow-lg overflow-hidden w-48 text-sm">
            <Link
              href="#"
              className="w-full flex items-center gap-1 px-4 py-2 text-left hover:bg-gray-100"
            >
              <MdOutlineManageAccounts className="text-green-600" size={16} />
              My profile
            </Link>
            <Link
              href="#"
              className="w-full flex items-center gap-1 px-4 py-2 text-left hover:bg-gray-100"
            >
              <TbBasketFilled className="text-secondary" size={16} />
              Orders
            </Link>
            <Link
              href="#"
              className="w-full flex items-center gap-1 px-4 py-2 text-left hover:bg-gray-100"
            >
              <GoHeartFill className="text-red-500" size={16} />
              My favorites
            </Link>
            <button
              onClick={() => logOutUser()}
              className="w-full flex items-center gap-1 px-4 py-2 text-left text-red-500 hover:bg-gray-100"
            >
              <RiLogoutCircleRLine className="text-red-600" size={16} />
              Log out
            </button>
          </div>
        </div>
      </div>
    );
}
