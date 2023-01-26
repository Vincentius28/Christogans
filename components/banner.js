import Image from "next/image";
import Pict from "../public/baner2.png";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Banner() {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      // navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="flex items-center justify-center w-full">
          <div className="w-full h-86 bg-white border border-black flex items-center">
            <Image src={Pict} className="w-full h-42" />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex items-center justify-center w-full">
          <div className="w-full h-86 bg-white border border-black flex items-center">
            <Image src={Pict} className="w-full h-42" />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex items-center justify-center w-full">
          <div className="w-full h-86 bg-white border border-black flex items-center">
            <Image src={Pict} className="w-full h-42" />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
