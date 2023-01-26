import Image from "next/image";
import Pict from "../public/images.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Carousel() {
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
          <div className="w-full h-96 bg-blue-500">
            <Image src={Pict} className="w-full h-full" />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex items-center justify-center w-full">
          <div className="w-full h-96 bg-blue-500">
            <Image src={Pict} className="w-full h-full" />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex items-center justify-center w-full">
          <div className="w-full h-96 bg-blue-500">
            <Image src={Pict} className="w-full h-full" />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
