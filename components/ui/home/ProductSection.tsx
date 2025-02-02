"use client";
import DefaultImage from "@/public/default-image.png";
import Button from "@/components/common/Button";
import Product from "./Product";

export default function ProductSection() {
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
    <section className="container mx-auto w-full min-h-screen px-10 max-md:px-5 pb-16">
      <div className="w-full h-full">
        <div className="h-full w-full">
          <ul className="w-full grid grid-cols-5 max-xl:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 h-full gap-5">
            {productsList.map((p, i) => {
              return <Product key={i} product={p} />;
            })}
          </ul>
        </div>
        <div className="w-full mt-16 text-center">
          <Button className="text-white mx-auto !py-3 !px-6 rounded-full font-semibold text-2xl max-md:text-xl bg-primary hover:bg-white hover:text-text border-2 border-primary">
            Show more products
          </Button>
        </div>
      </div>
    </section>
  );
}
