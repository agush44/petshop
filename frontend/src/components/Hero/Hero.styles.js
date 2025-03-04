import styled from "styled-components";

export const HeroTotalContainer = styled.div`
  display: flex;
  height: auto;
  width: 100%;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;

  /* Extra small devices (phones, 320px and up) */
  @media (min-width: 320px) {
  }

  /* Small devices (phones, 480px and up) */
  @media (min-width: 480px) {
  }

  /* Medium devices (tablets, 576px and up) */
  @media (min-width: 576px) {
  }

  /* Large devices (tablets/laptops, 768px and up) */
  @media (min-width: 768px) {
  }

  /* Extra large devices (desktops, 992px and up) */
  @media (min-width: 992px) {
  }

  /* Extra extra large devices (large desktops, 1200px and up) */
  @media (min-width: 1200px) {
  }

  /* Ultra-wide screens (4K displays, 1400px and up) */
  @media (min-width: 1400px) {
  }
`;

export const HeroContainer = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 0;
  width: 100%;
`;

export const VideoContainer = styled.div`
  width: 100%;
  max-width: 1920px;
  max-height: 120vh;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 0 auto;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    max-width: 100%;
    max-height: 100%;
  }

  /* Extra small devices (phones, 320px and up) */
  @media (min-width: 320px) {
    video {
      height: 40vh;
    }
  }

  /* Small devices (phones, 480px and up) */
  @media (min-width: 480px) {
    video {
      height: 40vh;
    }
  }

  /* Medium devices (tablets, 576px and up) */
  @media (min-width: 576px) {
    video {
      height: 40vh;
      width: 100%;
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
      max-width: 100%;
      max-height: 100%;
    }
  }

  /* Ultra-wide screens (4K displays, 1400px and up) */
  @media (min-width: 1400px) {
    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
      max-width: 100%;
      max-height: 100%;
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
