import styled from "styled-components";

export const CategoryCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 2rem;
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  max-width: 600px;
  padding-bottom: 1.5rem;
  cursor: pointer;
  transition: transform 0.1s ease-in-out;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.9s ease-out, transform 0.6s ease-out;

  &.in-view {
    opacity: 1;
    transform: translateY(0);
  }

  &:hover {
    transform: scale(1.05);
  }

  /* Dispositivos pequeños */
  @media (max-width: 575.98px) {
    max-width: 300px;
    margin: 2rem 0;
  }

  /* Dispositivos medianos */
  @media (min-width: 576px) and (max-width: 767.98px) {
    max-width: 350px;
    margin: 2rem 1rem;
  }

  /* Dispositivos grandes */
  @media (min-width: 768px) {
    max-width: 300px;
    margin: 2rem 1rem;
  }

  /* Desktops grandes */
  @media (min-width: 992px) {
    max-width: 500px;
    margin: 2rem 1rem;
  }

  /* Pantallas ultra anchas */
  @media (min-width: 1400px) {
    max-width: 500px;
    margin: 5rem;
  }
`;

// Imagen de la tarjeta
export const CategoryImage = styled.img`
  width: 100%;
  object-fit: cover;
  /* Ajuste de altura en pantallas más grandes */
  @media (min-width: 768px) {
    height: 200px;
  }

  @media (min-width: 1200px) {
    height: 300px;
  }

  @media (min-width: 1400px) {
    height: 300px;
  }
`;

// Contenedor de contenido de la tarjeta (título y descripción)
export const CategoryContent = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Título de la tarjeta
export const CategoryTitle = styled.h3`
  text-align: center;
  padding-top: 1rem;
  background-color: #fff;
  color: #333;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }

  @media (min-width: 992px) {
    font-size: 1.5rem;
  }
`;

// Descripción de la tarjeta
export const CategoryDescription = styled.p`
  color: #666;
  width: 70%;
  margin: 0 auto;

  @media (min-width: 768px) {
    font-size: 0.8rem;
  }

  @media (min-width: 992px) {
    font-size: 1rem;
  }
`;
