import styled from "styled-components";
import { media } from "../../../styles";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const CarouselContainer = styled.div`
  width: 100%;
  max-width: 100vw;
  overflow: hidden;
  margin: 4rem 0;
  background-color: rgba(218, 220, 224, 0.51);
  padding: 1rem;

  ${media.md} {
    margin: 5rem 0;
  }

  ${media.lg} {
    margin: 6rem 0;
  }
`;

export const Slide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 140px;

  ${media.md} {
    height: 160px;
  }

  ${media.lg} {
    height: 200px;
  }
`;

export const BrandImage = styled.img`
  object-fit: contain;
  filter: grayscale(30%);
  transition: filter 0.3s ease, transform 0.3s ease;

  &:hover {
    filter: grayscale(0%);
    transform: scale(1.1);
  }

  max-width: 100px;
  max-height: 70px;

  ${media.md} {
    max-width: 120px;
    max-height: 80px;
  }

  ${media.lg} {
    max-width: 150px;
    max-height: 100px;
  }
`;
