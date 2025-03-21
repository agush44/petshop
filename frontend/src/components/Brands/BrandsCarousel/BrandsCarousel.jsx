import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import {
  CarouselContainer,
  Slide,
  BrandImage,
} from "./BrandsCarousel.styles.js";
import { brands } from "../../../data/brandsData.jsx";

const BrandsCarousel = () => {
  return (
    <CarouselContainer>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          576: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
          1280: { slidesPerView: 6 },
        }}
      >
        {brands.map((brand, index) => (
          <SwiperSlide key={index}>
            <Slide>
              <BrandImage src={brand} alt={`Marca ${index + 1}`} />
            </Slide>
          </SwiperSlide>
        ))}
      </Swiper>
    </CarouselContainer>
  );
};

export default BrandsCarousel;
