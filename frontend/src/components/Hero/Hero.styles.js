import styled, { keyframes } from "styled-components";

// Animación para cuando el video aparece (fade-in)
const fadeInStart = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
`;

// Animación cuando el video está completamente cargado
const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const HeroTotalContainer = styled.div`
  display: flex;
  height: 130vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const HeroContainer = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
`;

export const VideoContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  /* Animación de fade-in cuando el video está cargado */
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    animation: ${fadeInStart} 1.5s ease-out forwards; // Animación por defecto hasta que cargue el video
  }

  /* Cuando el video se carga completamente, se aplica fade-in */
  .fade-in {
    animation: ${fadeIn} 1.5s ease-out forwards;
  }

  /* Placeholder de imagen hasta que el video se cargue completamente */
  .fade-in-start {
    opacity: 1;
  }

  /* Extra small devices (phones, 320px and up) */
  @media (min-width: 320px) {
    video {
      height: 52vh;
    }
  }

  /* Small devices (phones, 480px and up) */
  @media (min-width: 480px) {
    video {
      height: 70vh;
    }
  }

  /* Medium devices (tablets, 576px and up) */
  @media (min-width: 576px) {
    video {
      height: 50vh;
    }
  }

  /* Large devices (tablets/laptops, 768px and up) */
  @media (min-width: 768px) {
    video {
      height: 50vh;
    }
  }

  /* Extra large devices (desktops, 992px and up) */
  @media (min-width: 992px) {
  }

  /* Extra extra large devices (large desktops, 1200px and up) */
  @media (min-width: 1200px) {
    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  /* Ultra-wide screens (4K displays, 1400px and up) */
  @media (min-width: 1400px) {
    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  @media (max-width: 1024px) {
    height: auto;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    video {
      object-fit: cover;
    }
  }

  @media (max-width: 480px) {
    width: 100%;
    height: auto;
    video {
      object-fit: cover;
    }
  }
`;
