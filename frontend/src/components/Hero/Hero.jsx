import { Swiper, SwiperSlide } from "swiper/react";
import {
  HeroTotalContainer,
  HeroContainer,
  VideoContainer,
} from "./Hero.styles";
import FeatureBar from "./FeatureBar/FeatureBar";

const Hero = () => {
  return (
    <HeroTotalContainer>
      <HeroContainer>
        <VideoContainer>
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 5000 }}
            pagination={{ clickable: true }}
            navigation={true}
          >
            <SwiperSlide>
              <video
                src="https://res.cloudinary.com/dxognqhnp/video/upload/v1740072261/petshop_2_j2meac.mp4"
                autoPlay
                muted
                loop
                playsInline
              />
            </SwiperSlide>
            <SwiperSlide>
              <video
                src="https://res.cloudinary.com/dxognqhnp/video/upload/v1740072261/petshop_2_j2meac.mp4"
                autoPlay
                muted
                loop
                playsInline
              />
            </SwiperSlide>
            <SwiperSlide>
              <video
                src="https://res.cloudinary.com/dxognqhnp/video/upload/v1740072261/petshop_2_j2meac.mp4"
                autoPlay
                muted
                loop
                playsInline
              />
            </SwiperSlide>
          </Swiper>
        </VideoContainer>
        <FeatureBar />
      </HeroContainer>
    </HeroTotalContainer>
  );
};

export default Hero;
