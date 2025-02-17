// src/components/Hero/HeroStyles.js
import styled from "styled-components";

export const HeroTotalContainer = styled.div`
  margin-top: 9rem;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  margin-bottom: 5rem;
`;

// Contenedor del Hero
export const HeroContainer = styled.section`
  height: 80%;
  display: flex;
  align-items: center;
  position: relative;
  padding: 0 5%;
  width: 100%;
`;

// Contenedor del título
export const TitleContainer = styled.div`
  width: 40%;
  padding: 0 3rem 0 3rem;

  @media (max-width: 1024px) {
    width: 80%;
    text-align: center;
  }
`;

export const Title = styled.p`
  font-size: 4rem;
  font-family: "Fredoka", serif;
  color: rgba(13, 34, 107, 0.84);
  text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
  weight: 700;
  width: 125;

  @media (max-width: 768px) {
    font-size: 2rem;
    padding: 3rem;
  }
`;

export const Subtitle1 = styled.p`
  font-size: 3rem;
  font-family: "Fredoka", serif;
  color: rgba(13, 34, 107, 0.84);
  text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
`;

export const Subtitle2 = styled.p`
  font-size: 1.2rem;
  color: rgba(12, 28, 87, 0.84);
  font-family: "Nunito", serif;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

// Contenedor del SVG
export const SvgContainer = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 1024px) {
    width: 100%;
    height: auto;
  }
`;

// SVG con posición relativa para mantener superposición
export const Svg = styled.img`
  position: relative;
  top: 18.5%;
  left: 50%;
  transform: translateX(-50%);
  width: 70rem;
  max-width: 95%;
  height: auto;
  z-index: 2;

  @media (max-width: 1024px) {
    top: -5%;
    width: 60rem;
  }

  @media (max-width: 768px) {
    top: 0;
    width: 40rem;
  }

  @media (max-width: 480px) {
    width: 25rem;
  }
`;
