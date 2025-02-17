import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import {
  CarouselContainer,
  Slide,
  BrandImage,
} from "./BrandsCarousel.styles.js";

// Importa las imágenes de las marcas
import brand1 from "../../assets/eukanuba.webp";
import brand2 from "../../assets/excellent.png";
import brand3 from "../../assets/pro-plan.webp";
import brand4 from "../../assets/royal.webp";
import brand5 from "../../assets/vital-can.webp";
import brand6 from "../../assets/Cat-Chow.png";
import brand7 from "../../assets/Pedigree.png";

const BrandsCarousel = () => {
  const brands = [brand1, brand2, brand3, brand4, brand5, brand6, brand7];

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
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
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
