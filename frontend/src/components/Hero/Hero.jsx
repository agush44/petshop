import { useState, useRef } from "react";
import {
  HeroTotalContainer,
  HeroContainer,
  VideoContainer,
} from "./Hero.styles";
import FeatureBar from "./FeatureBar/FeatureBar";

const Hero = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef(null);

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
            preload="auto"
            poster="/placeholder.jpg"
            width="100%"
            height="auto"
            className={isVideoLoaded ? "fade-in" : "fade-in-start"}
            onLoadedData={handleVideoLoad}
          />
        </VideoContainer>
        <FeatureBar />
      </HeroContainer>
    </HeroTotalContainer>
  );
};

export default Hero;
