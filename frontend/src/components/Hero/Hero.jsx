import svg from "../../assets/svg.svg";
import {
  HeroTotalContainer,
  HeroContainer,
  TitleContainer,
  Title,
  Subtitle1,
  Subtitle2,
  SvgContainer,
  Svg,
} from "./Hero.styles";
import FeatureBar from "./FeatureBar/FeatureBar.jsx";

const Hero = () => {
  return (
    <HeroTotalContainer>
      <HeroContainer>
        <TitleContainer>
          <Title>El mejor precio en productos</Title>
          <Subtitle1>para mascotas</Subtitle1>
          <Subtitle2>Lorem ipsum dolor sit amet.</Subtitle2>
        </TitleContainer>
        <SvgContainer>
          <Svg src={svg} alt="SVG1" />
        </SvgContainer>
      </HeroContainer>
      <FeatureBar />
    </HeroTotalContainer>
  );
};

export default Hero;
