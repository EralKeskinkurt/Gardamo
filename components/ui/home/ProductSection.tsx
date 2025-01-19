"use client";
import Image from "next/image";
import DefaultImage from "@/public/default-image.png";
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";
import { useState } from "react";
import Button from "@/components/common/Button";

export default function ProductSection() {
  let productsList = [
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
    {
      name: "Product-6",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Deserunt sint molestias pariatur alias aut vitae",
      image: DefaultImage,
      price: 20,
      isWish: false,
    },
    {
      name: "Product-6",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Deserunt sint molestias pariatur alias aut vitae",
      image: DefaultImage,
      price: 20,
      isWish: false,
    },
    {
      name: "Product-6",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Deserunt sint molestias pariatur alias aut vitae",
      image: DefaultImage,
      price: 20,
      isWish: false,
    },
    {
      name: "Product-6",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Deserunt sint molestias pariatur alias aut vitae",
      image: DefaultImage,
      price: 20,
      isWish: false,
    },
    {
      name: "Product-6",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Deserunt sint molestias pariatur alias aut vitae",
      image: DefaultImage,
      price: 20,
      isWish: false,
    },
    {
      name: "Product-6",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Deserunt sint molestias pariatur alias aut vitae",
      image: DefaultImage,
      price: 20,
      isWish: false,
    },
    {
      name: "Product-6",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Deserunt sint molestias pariatur alias aut vitae",
      image: DefaultImage,
      price: 20,
      isWish: false,
    },
    {
      name: "Product-6",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Deserunt sint molestias pariatur alias aut vitae",
      image: DefaultImage,
      price: 20,
      isWish: false,
    },
    {
      name: "Product-6",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Deserunt sint molestias pariatur alias aut vitae",
      image: DefaultImage,
      price: 20,
      isWish: false,
    },
    {
      name: "Product-6",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Deserunt sint molestias pariatur alias aut vitae",
      image: DefaultImage,
      price: 20,
      isWish: false,
    },
    {
      name: "Product-6",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Deserunt sint molestias pariatur alias aut vitae",
      image: DefaultImage,
      price: 20,
      isWish: false,
    },
    {
      name: "Product-6",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Deserunt sint molestias pariatur alias aut vitae",
      image: DefaultImage,
      price: 20,
      isWish: false,
    },
    {
      name: "Product-6",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Deserunt sint molestias pariatur alias aut vitae",
      image: DefaultImage,
      price: 20,
      isWish: false,
    },
    {
      name: "Product-6",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Deserunt sint molestias pariatur alias aut vitae",
      image: DefaultImage,
      price: 20,
      isWish: false,
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
    <section className="container mx-auto w-full min-h-screen px-10 pb-16">
      <div className="w-full h-full">
        <div className="h-full w-full">
          <ul className="w-full grid grid-cols-5 h-full gap-5">
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
                      <Button className="bg-secondary text-text font-semibold hover:brightness-90 hover:text-text border-2 border-secondary text-xs">
                        Add cart
                      </Button>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="w-full mt-16 text-center">
          <Button className="text-white mx-auto !py-3 !px-6 rounded-full font-semibold text-2xl bg-primary hover:bg-white hover:text-text border-2 border-primary">
            Show more products
          </Button>
        </div>
      </div>
    </section>
  );
}
