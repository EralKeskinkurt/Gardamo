"use client";
import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
export default function BodyFilter() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center w-full">
      <span
        tabIndex={1}
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-accent flex items-center justify-between p-3 text-text font-medium cursor-pointer"
      >
        Brands{" "}
        <IoMdArrowDropdown
          className={`transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          size={25}
        />
      </span>
      <div
        className={`w-full bg-accent/20 transition-all ${
          isOpen ? "h-32" : "h-0"
        }`}
      ></div>
    </div>
  );
}
