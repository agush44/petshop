import { BounceLoader } from "react-spinners";
import styled from "styled-components";

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Esto asegura que el loader ocupe toda la altura de la pantalla */
`;

const Loader = () => {
  return (
    <LoaderContainer>
      {/* Aquí puedes personalizar el tamaño y color del BounceLoader */}
      <BounceLoader size={60} color="#3498db" />
    </LoaderContainer>
  );
};

export default Loader;
