import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { EffectCoverflow, Pagination, Autoplay, Navigation } from 'swiper/modules';
import { useWindowSize } from "@uidotdev/usehooks";
type ImageSliderProps = {
  images: string[];
  autoplay?: boolean;
  reverse?:boolean;
};

export default function ImageSlider({ autoplay = true,reverse, images }: ImageSliderProps) {
  const { width } = useWindowSize();
  const slidesPerView = (width ?? 768) > 768 ? 3 : 1;
  return (
    <Swiper
      effect={'coverflow'}
      modules={[EffectCoverflow, Pagination, Autoplay]}
      slidesPerView={slidesPerView}
      loop={true}
      spaceBetween={30}
      centeredSlides={true}
      navigation
      coverflowEffect={
        {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }
      }
      autoplay={{ delay: 2500, reverseDirection: reverse, disableOnInteraction: false}}
      pagination={{ clickable: true }}
      className="mySwiper"
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
