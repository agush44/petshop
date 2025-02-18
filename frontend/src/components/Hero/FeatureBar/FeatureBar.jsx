import { FeatureBarContainer, FeatureItem, Text } from "./FeatureBar.styles";
import { FaMotorcycle, FaTruck, FaCreditCard } from "react-icons/fa";

const FeatureBar = () => {
  return (
    <FeatureBarContainer>
      <FeatureItem>
        <FaMotorcycle size={50} />
        <Text>Entregas a domicilio</Text>
      </FeatureItem>
      <FeatureItem>
        <FaTruck size={50} />
        <Text>Envíos gratis a Santa Fe</Text>
      </FeatureItem>
      <FeatureItem>
        <FaCreditCard size={50} />
        <Text>Todos los medios de pago</Text>
      </FeatureItem>
    </FeatureBarContainer>
  );
};

export default FeatureBar;
