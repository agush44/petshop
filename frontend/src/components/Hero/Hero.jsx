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
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 5000 }}
            pagination={{ clickable: true }}
            navigation={true}
          >
            <SwiperSlide>
              <video
                src="https://res.cloudinary.com/dxognqhnp/video/upload/v1739904605/202502181539_1_v7vevy.mp4"
                autoPlay
                muted
                loop
                playsInline
              />
            </SwiperSlide>
            <SwiperSlide>
              <video
                src="https://res.cloudinary.com/dxognqhnp/video/upload/v1739904605/202502181539_1_v7vevy.mp4"
                autoPlay
                muted
                loop
                playsInline
              />
            </SwiperSlide>
            <SwiperSlide>
              <video
                src="https://res.cloudinary.com/dxognqhnp/video/upload/v1739904605/202502181539_1_v7vevy.mp4"
                autoPlay
                muted
                loop
                playsInline
              />
            </SwiperSlide>
          </Swiper>
        </VideoContainer>
      </HeroContainer>
      <FeatureBar />
    </HeroTotalContainer>
  );
};

export default Hero;
