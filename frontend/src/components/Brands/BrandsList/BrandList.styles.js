import styled from "styled-components";
import { media } from "../../../styles";

export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0px 5px 12px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 100%;
  max-width: 220px; /* Aumentar el tamaño */
  aspect-ratio: 1;
  padding: 1rem; /* Agregar espacio interno */

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.2);
  }

  ${media.sm} {
    max-width: 200px;
  }

  ${media.md} {
    max-width: 210px;
  }

  ${media.lg} {
    max-width: 220px;
  }
`;

export const Img = styled.img`
  width: 150px; /* Aumentar el tamaño */
  height: 150px;
  object-fit: contain;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;
