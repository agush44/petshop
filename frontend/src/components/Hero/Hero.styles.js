import styled from "styled-components";

export const HeroTotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 80vh;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const HeroContainer = styled.section`
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
  padding: 0;
  width: 100%;
`;

export const VideoContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ajusta el video para que ocupe todo el contenedor sin desbordarse */
    max-width: 100%;
    max-height: 100%;
  }

  @media (max-width: 1024px) {
    height: auto;
  }

  @media (max-width: 768px) {
    width: 90%;
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
