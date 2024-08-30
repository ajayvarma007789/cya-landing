import React, { useEffect, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import { useWindowSize } from "@uidotdev/usehooks";
function useSwiperAutoplayFix(slides:any) {
  const swiperRef = useRef();
  const [autoplay, setAutoplay] = useState(false);
  const shouldAutoplay = slides.length > 1;

  if (autoplay !== shouldAutoplay) setAutoplay(shouldAutoplay);

  useEffect(() => {
      console.log(`Start autoplay if needed [has swiper: ${swiperRef.current != null}, start: ${autoplay}]`);
      if (autoplay) {
          const timer = setTimeout(() => {
              console.log("Calling swiper.autoplay.start");
              swiperRef.current?.autoplay.start();
          }, 3000);
          return () => clearTimeout(timer);
      }
  }, [autoplay]);

  return swiperRef;
}
type ImageSliderProps = {
  images: string[];
  reverse?: boolean;
  autoplay?: boolean;
};

export default function ImageSlider({ autoplay = true, reverse = true, images }: ImageSliderProps) {
  const { width } = useWindowSize();
  const slidesPerView = (width ?? 768) > 768 ? 3 : 1;
  const swiperRef = useSwiperAutoplayFix(slides)
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
      autoplay={autoplay ? { delay: 500, disableOnInteraction: false, reverseDirection: reverse } : false}
      pagination={{ clickable: true }}
      modules={[EffectCoverflow, Pagination, Autoplay]}
      className="w-screen mySwipper"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
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
