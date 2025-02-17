import styled from "styled-components";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Contenedor del carrusel
export const CarouselContainer = styled.div`
  width: 100%;
  max-width: 100vw;
  overflow: hidden;
  margin: 6rem 0;
  background-color: rgba(218, 220, 224, 0.51);
`;

// Estilo de cada slide
export const Slide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px; /* Ajusta según necesidad */
`;

// Imagen de la marca
export const BrandImage = styled.img`
  max-width: 150px;
  max-height: 100px;
  object-fit: contain;
  filter: grayscale(30%);
  transition: filter 0.3s ease, transform 0.3s ease;

  &:hover {
    filter: grayscale(0%);
    transform: scale(1.1);
  }
`;
