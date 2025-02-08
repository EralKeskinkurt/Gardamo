"use client";
import Image from "next/image";
import DefaultImage from "@/public/default-image.png";
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";

export default function Header() {
  const productsList = [
    {
      name: "Product-1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Deserunt sint molestias pariatur alias aut vitae",
      image: DefaultImage,
      price: 20,
      isWish: true,
    },
    {
      name: "Product-2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Deserunt sint molestias pariatur alias aut vitae",
      image: DefaultImage,
      price: 20,
      isWish: false,
    },
    {
      name: "Product-3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Deserunt sint molestias pariatur alias aut vitae",
      image: DefaultImage,
      price: 20,
      isWish: true,
    },
    {
      name: "Product-4",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Deserunt sint molestias pariatur alias aut vitae",
      image: DefaultImage,
      price: 20,
      isWish: false,
    },
    {
      name: "Product-5",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Deserunt sint molestias pariatur alias aut vitae",
      image: DefaultImage,
      price: 20,
      isWish: true,
    },
    {
      name: "Product-6",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Deserunt sint molestias pariatur alias aut vitae",
      image: DefaultImage,
      price: 20,
      isWish: false,
    },
  ];

  return (
    <header className="container mx-auto w-full">
      <div className="w-full  grid grid-cols-2 max-xl:grid-cols-1 gap-10 items-start justify-center pt-16 max-md:pt-7 px-10 max-md:px-5">
        <div className="h-full bg-orange-400 overflow-hidden rounded-lg">
          <Image
            src="https://plus.unsplash.com/premium_photo-1672883551967-ab11316526b4"
            alt="header section image"
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="h-full w-full">
          <ul className="w-full grid grid-cols-3 max-md:grid-cols-2 grid-rows-2 h-full gap-2">
            {productsList.map((p, i) => {
              return (
                <li
                  key={i}
                  className="w-full flex flex-col relative bg-accent rounded-md overflow-hidden shadow-md"
                >
                  <Image
                    src={p.image}
                    alt="default product image"
                    width={400}
                    height={400}
                    className="w-full object-cover max-h-[70%]"
                  />
                  <span className="absolute top-2 right-2 text-3xl cursor-pointer">
                    <GoHeart
                      className={`absolute right-1 transition-transform ${
                        p.isWish ? "scale-0" : "scale-100"
                      }`}
                    />
                    <GoHeartFill
                      className={`absolute right-1 transition-transform text-red-500 ${
                        p.isWish ? "scale-100" : "scale-0"
                      }`}
                    />
                  </span>
                  <div className="p-2 flex flex-col items-start justify-start w-full h-full">
                    <h3 className="text-sm font-semibold text-text">
                      {p.name}
                    </h3>
                    <p className="truncate w-full text-xs flex-1 text-text">
                      {p.description}
                    </p>
                    <div className="flex items-center w-full">
                      <span className="flex-1 text-lg text-text font-light">
                        ${p.price}.00
                      </span>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </header>
  );
}
