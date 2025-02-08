"use client";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
export default function PriceRangeFilter() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center w-full text-text border-b border-b-text/20">
      <span
        tabIndex={1}
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-accent/20 flex items-center justify-between p-3 text-text text-sm font-semibold cursor-pointer"
      >
        Price range{" "}
        <IoMdArrowDropdown
          className={`transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          size={20}
        />
      </span>
      <div
        className={`w-full bg-accent/20 transition-all overflow-hidden ${
          isOpen ? "h-56" : "h-0"
        }`}
      >
        <form className="w-full flex flex-col items-start justify-center px-4 pb-2 gap-3">
          <div className="flex items-center w-full justify-center gap-2">
            <input
              type="number"
              className="w-[40%] outline-none text-xs p-2 rounded-md"
              placeholder="min price"
            />
            <input
              type="number"
              className="w-[40%] outline-none text-xs p-2 rounded-md"
              placeholder="max price"
            />
            <span className="w-[20%] flex items-center justify-center">
              <FaSearch
                className="text-secondary cursor-pointer bg-text opacity-60 rounded-md p-1"
                size={28}
              />
            </span>
          </div>
          <ul className="flex flex-col items-start justify-start text-sm gap-2">
            <li className="flex items-center gap-2">
              <input type="radio" />
              <span>300 - 600</span>
            </li>
            <li className="flex items-center gap-2">
              <input type="radio" />
              <span>600 - 900</span>
            </li>
            <li className="flex items-center gap-2">
              <input type="radio" />
              <span>900 - 1200</span>
            </li>
            <li className="flex items-center gap-2">
              <input type="radio" />
              <span>1200 - 1600</span>
            </li>
            <li className="flex items-center gap-2">
              <input type="radio" />
              <span>1600 - 2000</span>
            </li>
            <li className="flex items-center gap-2">
              <input type="radio" />
              <span>2000 - 2999</span>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
}
