import styled from "styled-components";

export const FeatureBarContainer = styled.div`
  width: 100%;
  height: auto;
  background-color: #3a58cf;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 1px 36px -7px rgba(0, 0, 0, 0.15) inset;
  -webkit-box-shadow: 1px 1px 36px -7px rgba(0, 0, 0, 0.15) inset;
  -moz-box-shadow: 1px 1px 36px -7px rgba(0, 0, 0, 0.15) inset;
  gap: 5rem;
  padding-left: 5%;
  color: #f9f7f0;
  margin-top: -1rem;

  /* Extra small devices (phones, 320px and up) */
  @media (min-width: 320px) {
    /* Estilos aquí */
  }

  /* Small devices (phones, 480px and up) */
  @media (min-width: 480px) {
    /* Estilos aquí */
  }

  /* Medium devices (tablets, 576px and up) */
  @media (min-width: 576px) {
    /* Estilos aquí */
  }

  /* Large devices (tablets/laptops, 768px and up) */
  @media (min-width: 768px) {
    height: auto;
    padding: 2rem 5%;
    gap: 1rem;
  }

  /* Extra large devices (desktops, 992px and up) */
  @media (min-width: 992px) {
    height: auto;
    padding: 2rem;
    gap: 2rem;
  }

  /* Extra extra large devices (large desktops, 1200px and up) */
  @media (min-width: 1200px) {
    height: auto;
    padding: 2rem;
  }

  /* Ultra-wide screens (4K displays, 1400px and up) */
  @media (min-width: 1400px) {
    height: auto;
    padding: 3rem;
  }
`;

export const FeatureItem = styled.div`
  color: #f9f7f0;
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.1rem;
  font-weight: 500;

  /* Large devices (tablets/laptops, 768px and up) */
  @media (min-width: 768px) {
    font-size: 0.8rem;
  }

  /* Extra large devices (desktops, 992px and up) */
  @media (min-width: 992px) {
    gap: 1rem;
    font-size: 1.1rem;
  }

  /* Extra extra large devices (large desktops, 1200px and up) */
  @media (min-width: 1200px) {
    gap: 1rem;
    font-size: 1.1rem;
  }

  /* Ultra-wide screens (4K displays, 1400px and up) */
  @media (min-width: 1400px) {
    gap: 1rem;
    font-size: 1.1rem;
  }
`;

export const FaMotorcycle = styled.i`
  color: #f9f7f0;
`;

export const FaTruck = styled.i`
  color: #f9f7f0;
`;

export const FaCreditCard = styled.i`
  color: #f9f7f0;
`;

export const Text = styled.p`
  width: 50%;
`;
