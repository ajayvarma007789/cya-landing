import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import { useWindowSize } from "@uidotdev/usehooks";

type ImageSliderPropp = {
    images: string[];
    reverse?: boolean;
    autoplay?: boolean;
  }

export default function ImageSlider({ autoplay = true, reverse = true,images }:ImageSliderPropp) {
  const { width } = useWindowSize();
  const slidesPerView = (width ?? 768) > 768 ? 3 : 1;

  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={false}
        loop
        spaceBetween={50}
        centeredSlides={true}
        slidesPerView={slidesPerView}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={autoplay ? { delay: 2500, disableOnInteraction: false, reverseDirection: reverse  } : false} 
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="w-screen mySwiper"
      >
       {images.map((image, index) => (
            <SwiperSlide key={index}>
            <img src={image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
          </SwiperSlide>
       ))}
      </Swiper>
    </>
  );
}
