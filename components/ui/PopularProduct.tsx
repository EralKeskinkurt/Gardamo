"use client";

import { Navigation, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import DefaultImage from "@/public/default-image.png";
import "swiper/css";
import "swiper/css/navigation";

export default function PopularProduct() {
  return (
    <Swiper
      modules={[Navigation, Scrollbar, A11y]}
      spaceBetween={30}
      slidesPerView={2}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      className="w-full group-focus-within:flex-1"
    >
      <SwiperSlide className="bg-accent h-full flex items-center border border-text/50 rounded-md overflow-hidden">
        <Image
          src={DefaultImage}
          height={500}
          width={500}
          alt="Popular product image"
          className="object-cover h-full w-2/5"
        />
      </SwiperSlide>
      <SwiperSlide className="bg-accent h-full flex items-center border border-text/50 rounded-md overflow-hidden">
        <Image
          src={DefaultImage}
          height={500}
          width={500}
          alt="Popular product image"
          className="object-cover h-full w-2/5"
        />
      </SwiperSlide>
      <SwiperSlide className="bg-accent h-full flex items-center border border-text/50 rounded-md overflow-hidden">
        <Image
          src={DefaultImage}
          height={500}
          width={500}
          alt="Popular product image"
          className="object-cover h-full w-2/5"
        />
      </SwiperSlide>
    </Swiper>
  );
}
