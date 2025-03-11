import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
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
              <Link to="/shop">
                {" "}
                <video
                  src="https://res.cloudinary.com/dxognqhnp/video/upload/v1740072261/petshop_2_j2meac.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/shop">
                {" "}
                <video
                  src="https://res.cloudinary.com/dxognqhnp/video/upload/v1740072261/petshop_2_j2meac.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/shop">
                {" "}
                <video
                  src="https://res.cloudinary.com/dxognqhnp/video/upload/v1740072261/petshop_2_j2meac.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </Link>
            </SwiperSlide>
          </Swiper>
        </VideoContainer>
        <FeatureBar />
      </HeroContainer>
    </HeroTotalContainer>
  );
};

export default Hero;
