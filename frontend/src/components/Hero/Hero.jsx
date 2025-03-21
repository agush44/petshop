import { useState, useRef, useEffect } from "react";
import {
  HeroTotalContainer,
  HeroContainer,
  VideoContainer,
} from "./Hero.styles";
import FeatureBar from "./FeatureBar/FeatureBar";
import { breakpoints } from "../../styles";

const Hero = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [videoSrc, setVideoSrc] = useState("");
  const videoRef = useRef(null);

  useEffect(() => {
    const updateVideoSrc = () => {
      if (window.innerWidth < parseInt(breakpoints.md)) {
        setVideoSrc(
          "https://res.cloudinary.com/dxognqhnp/video/upload/v1742576313/202503211354_1_ejjzrt.mp4"
        );
      } else {
        setVideoSrc(
          "https://res.cloudinary.com/dxognqhnp/video/upload/v1740072261/petshop_2_j2meac.mp4"
        );
      }
    };

    updateVideoSrc();
    window.addEventListener("resize", updateVideoSrc);

    return () => window.removeEventListener("resize", updateVideoSrc);
  }, []);

  return (
    <HeroTotalContainer>
      <HeroContainer>
        <VideoContainer>
          <video
            ref={videoRef}
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/placeholder.jpg"
            width="100%"
            height="auto"
            className={isVideoLoaded ? "fade-in" : "fade-in-start"}
            onLoadedData={() => setIsVideoLoaded(true)}
          />
        </VideoContainer>
        <FeatureBar />
      </HeroContainer>
    </HeroTotalContainer>
  );
};

export default Hero;
