"use client";
import { categoryData } from "@/app/categories";
import { useState } from "react";

export default function CategoriesDropdown() {
  const [active, setActive] = useState<boolean>(false);
  const [activeCategory, setActiveCategory] = useState(categoryData[0]);

  return (
    <div className="absolute top-9 right-0 p-2 bg-transparent group-hover:flex w-[40rem] h-[25rem] hidden">
      <div className="flex shadow-md rounded-lg overflow-hidden w-full h-full">
        <ul
          onMouseEnter={() => setActive(true)}
          onMouseLeave={() => setActive(false)}
          className={`grid grid-cols-3 gap-1 items-start bg-white w-full h-full p-3.5 z-20`}
        >
          {categoryData.map((c) => {
            return c.subcategories.map((sc, e) => {
              return (
                <li
                  key={e}
                  className={`flex-col items-center ${
                    active && activeCategory.id === c.id ? "flex" : "hidden"
                  }`}
                >
                  <span className="font-medium">{sc.name}</span>
                  <ul className="flex flex-col gap-2 items-center text-sm">
                    {sc.subcategories.map((ssc, a) => {
                      return (
                        <li
                          key={a}
                          className="text-text/50 hover:text-secondary cursor-pointer"
                        >
                          {ssc.name}
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            });
          })}
        </ul>
        <ul className="flex flex-col items-start justify-start bg-background w-full h-full flex-1">
          {categoryData.map((c, i) => {
            return (
              <li key={i} className="w-full flex items-start justify-start">
                <span
                  onMouseEnter={() => {
                    setActiveCategory(c);
                    setActive(true);
                  }}
                  onMouseLeave={() => setActive(false)}
                  className={`whitespace-nowrap p-3.5 hover:bg-white w-full h-full text-sm cursor-pointer ${
                    active && activeCategory.id == c.id ? "bg-white" : ""
                  }`}
                >
                  {c.name}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
