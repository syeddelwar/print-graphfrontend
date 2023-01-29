// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/context/AuthContext";
// import required modules
import { Navigation, Pagination } from "swiper";
export default function Slider() {
  const { sliderImage, getHomeSliderImage } = useContext(AuthContext);
  
  useEffect(() => {
    getHomeSliderImage();
  }, []);

  return (
    <Swiper
      navigation={true}
      spaceBetween={0}
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination, Navigation]}
      className=" w-[100%]"
    >
      {sliderImage?.data?.attributes?.Images.data.map((img) => (
        <SwiperSlide key={img.id}>
          <Image
            src={`https://demo-production-edcf.up.railway.app${img.attributes.url}`}
            width={50}
            height={10}
            className=" rounded-md shadow-sm w-[100%] "
            alt="img"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
