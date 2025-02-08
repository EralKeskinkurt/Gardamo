"use client";
import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
export default function BodyFilter() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center w-full border-b border-b-text/20">
      <span
        tabIndex={1}
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-accent/20 flex items-center justify-between p-3 text-text text-sm font-semibold cursor-pointer"
      >
        Brands{" "}
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
          <input
            type="text"
            className="w-full outline-none text-xs p-2 rounded-md"
            placeholder="&#x26B2; Filter"
          />
          <div className="w-full flex flex-col items-start justify-start gap-1 overflow-y-scroll max-h-44 text-text text-sm scroll-block">
            <label
              htmlFor="brand-1"
              className="flex items-center gap-1 hover:bg-text/20 transition-all rounded-md cursor-pointer py-1 px-2 w-full "
            >
              <input id="brand-1" type="checkbox" />
              <span className="select-none">Phatos</span>
            </label>
            <label
              htmlFor="brand-1"
              className="flex items-center gap-1 hover:bg-text/20 transition-all rounded-md cursor-pointer py-1 px-2 w-full "
            >
              <input id="brand-1" type="checkbox" />
              <span className="select-none">Phatos</span>
            </label>
            <label
              htmlFor="brand-1"
              className="flex items-center gap-1 hover:bg-text/20 transition-all rounded-md cursor-pointer py-1 px-2 w-full "
            >
              <input id="brand-1" type="checkbox" />
              <span className="select-none">Phatos</span>
            </label>
            <label
              htmlFor="brand-1"
              className="flex items-center gap-1 hover:bg-text/20 transition-all rounded-md cursor-pointer py-1 px-2 w-full "
            >
              <input id="brand-1" type="checkbox" />
              <span className="select-none">Phatos</span>
            </label>
            <label
              htmlFor="brand-1"
              className="flex items-center gap-1 hover:bg-text/20 transition-all rounded-md cursor-pointer py-1 px-2 w-full "
            >
              <input id="brand-1" type="checkbox" />
              <span className="select-none">Phatos</span>
            </label>
            <label
              htmlFor="brand-1"
              className="flex items-center gap-1 hover:bg-text/20 transition-all rounded-md cursor-pointer py-1 px-2 w-full "
            >
              <input id="brand-1" type="checkbox" />
              <span className="select-none">Phatos</span>
            </label>
            <label
              htmlFor="brand-1"
              className="flex items-center gap-1 hover:bg-text/20 transition-all rounded-md cursor-pointer py-1 px-2 w-full "
            >
              <input id="brand-1" type="checkbox" />
              <span className="select-none">Phatos</span>
            </label>
          </div>
        </form>
      </div>
    </div>
  );
}
