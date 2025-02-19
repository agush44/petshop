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

  /* Large devices (tablets/laptops, 768px and up) */
  @media (min-width: 768px) {
    margin: 0.5rem 0;
  }

  /* Extra large devices (desktops, 992px and up) */
  @media (min-width: 992px) {
    margin: 0.5rem 0;
  }

  /* Extra extra large devices (large desktops, 1200px and up) */
  @media (min-width: 1200px) {
    margin: 0.5rem 0;
  }

  /* Ultra-wide screens (4K displays, 1400px and up) */
  @media (min-width: 1400px) {
  }
`;

// Estilo de cada slide
export const Slide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;

  /* Large devices (tablets/laptops, 768px and up) */
  @media (min-width: 768px) {
    height: 140px;
  }

  /* Extra large devices (desktops, 992px and up) */
  @media (min-width: 992px) {
    gap: 1rem;
  }

  /* Extra extra large devices (large desktops, 1200px and up) */
  @media (min-width: 1200px) {
    gap: 1rem;
  }

  /* Ultra-wide screens (4K displays, 1400px and up) */
  @media (min-width: 1400px) {
    gap: 1rem;
  }
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

  /* Large devices (tablets/laptops, 768px and up) */
  @media (min-width: 768px) {
    max-width: 120px;
    max-height: 70px;
  }

  /* Extra large devices (desktops, 992px and up) */
  @media (min-width: 992px) {
    gap: 1rem;
  }

  /* Extra extra large devices (large desktops, 1200px and up) */
  @media (min-width: 1200px) {
    gap: 1rem;
  }

  /* Ultra-wide screens (4K displays, 1400px and up) */
  @media (min-width: 1400px) {
    gap: 1rem;
  }
`;
