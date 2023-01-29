import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Image from "next/image";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

function ProductDetails({ data }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <section className=" overflow-hidden w-full">
      <div className="product-slider">
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          spaceBetween={2}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className={`
           h-auto
  
           w-auto
  
            mb-2`}
        >
          {data.attributes.Images.data.map((img) => (
            <SwiperSlide key={img.id}>
              <Image
                src={`https://demo-production-edcf.up.railway.app${img.attributes.url}`}
                alt="img"
                width={400}
                height={400}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={5}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper lg:mb-5 h-[4rem] cursor-pointer "
        >
          {data.attributes.Images.data.map((img) => (
            <SwiperSlide key={img.id}>
              <Image
                src={`https://demo-production-edcf.up.railway.app${img.attributes.url}`}
                alt="img"
                width={800}
                height={800}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="product-content mt-4">
        <ReactMarkdown>{data?.attributes.Description}</ReactMarkdown>
      </div>
    </section>
  );
}

export default ProductDetails;
