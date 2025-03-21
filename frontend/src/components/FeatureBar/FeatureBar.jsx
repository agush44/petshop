import {
  FeatureBarContainer,
  FeatureItem,
  Text,
  StyledFaMotorcycle,
  StyledFaTruck,
  StyledFaCreditCard,
} from "./FeatureBar.styles";

const FeatureBar = () => {
  return (
    <FeatureBarContainer>
      <FeatureItem>
        <StyledFaMotorcycle size={50} />
        <Text>Entregas a domicilio</Text>
      </FeatureItem>
      <FeatureItem>
        <StyledFaTruck size={50} />
        <Text>Envíos gratis a Santa Fe</Text>
      </FeatureItem>
      <FeatureItem>
        <StyledFaCreditCard size={50} />
        <Text>Todos los medios de pago</Text>
      </FeatureItem>
    </FeatureBarContainer>
  );
};

export default FeatureBar;
