import { useState, useRef } from "react";
import {
  HeroTotalContainer,
  HeroContainer,
  VideoContainer,
} from "./Hero.styles";
import FeatureBar from "./FeatureBar/FeatureBar";

const Hero = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false); // Estado para saber si el video ha cargado
  const videoRef = useRef(null);

  // Cuando el video se ha cargado completamente, activamos la animación y otros comportamientos
  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  return (
    <HeroTotalContainer>
      <HeroContainer>
        <VideoContainer>
          <video
            ref={videoRef}
            src="https://res.cloudinary.com/dxognqhnp/video/upload/v1740072261/petshop_2_j2meac.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto" // Carga el video completo para que sea instantáneo cuando se muestra
            poster="/placeholder.jpg" // Imagen placeholder para mostrar mientras el video se carga
            width="100%"
            height="auto"
            className={isVideoLoaded ? "fade-in" : "fade-in-start"}
            onLoadedData={handleVideoLoad} // Cuando el video está completamente cargado
          />
        </VideoContainer>
        <FeatureBar />
      </HeroContainer>
    </HeroTotalContainer>
  );
};

export default Hero;
