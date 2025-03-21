import styled from "styled-components";
import { media } from "../../../styles";

export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); /* Sombra sutil */
  padding: 1.5rem; /* Padding ajustado */
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px); /* Efecto de flotación */
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);
  }

  ${media.md} {
    padding: 1.2rem; /* Menos espaciado en pantallas medianas */
  }

  ${media.lg} {
    padding: 1.5rem; /* Espaciado consistente en pantallas grandes */
  }
`;

export const Img = styled.img`
  width: 100%;
  height: auto;
  max-width: 130px;
  max-height: 130px;
  object-fit: contain; /* Mantiene proporciones */
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1); /* Pequeño zoom */
  }

  ${media.sm} {
    max-width: 110px;
    max-height: 110px;
  }

  ${media.md} {
    max-width: 120px;
    max-height: 120px;
  }

  ${media.lg} {
    max-width: 130px;
    max-height: 130px;
  }
`;
