import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import { useWindowSize } from "@uidotdev/usehooks";

type ImageSliderProps = {
  images: string[];
  reverse?: boolean;
  autoplay?: boolean;
};

export default function ImageSlider({ autoplay = true, reverse = true, images }: ImageSliderProps) {
  const { width } = useWindowSize();
  const slidesPerView = (width ?? 768) > 768 ? 3 : 1;

  return (
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      loop={true}
      spaceBetween={30}
      centeredSlides={true}
      slidesPerView={slidesPerView}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      autoplay={autoplay ? { delay: 2500, disableOnInteraction: false, reverseDirection: reverse } : false}
      pagination={{ clickable: true }}
      modules={[EffectCoverflow, Pagination, Autoplay]}
      className="w-screen mySwipper"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index} className="">
            
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            width={400} 
            height={400}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
