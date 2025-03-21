import styled from "styled-components";
import { FaMotorcycle, FaTruck, FaCreditCard } from "react-icons/fa";

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
  color: #f9f7f0;

  padding: 0 2rem;

  /* Extra small devices (phones, 320px and up) */
  @media (min-width: 320px) {
    gap: 1rem;
    height: 100px;
    margin-top: 0;
  }

  /* Small devices (phones, 480px and up) */
  @media (min-width: 480px) {
  }

  /* Medium devices (tablets, 576px and up) */
  @media (min-width: 576px) {
    paddng: 0 2rem;
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

  /* Extra small devices (phones, 320px and up) */
  @media (min-width: 320px) {
    font-size: 0.7rem;
  }

  /* Small devices (phones, 480px and up) */
  @media (min-width: 480px) {
  }

  /* Medium devices (tablets, 576px and up) */
  @media (min-width: 576px) {
  }

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

export const StyledFaMotorcycle = styled(FaMotorcycle)`
  color: #f9f7f0;

  /* Extra small devices (phones, 320px and up) */
  @media (min-width: 320px) {
    height: 2rem;
    width: 2rem;
  }

  * Large devices (tablets/laptops, 768px and up) */ @media (min-width: 768px) {
    height: 3rem;
    width: 3rem;
  }

  /* Extra large devices (desktops, 992px and up) */
  @media (min-width: 992px) {
  }

  /* Extra extra large devices (large desktops, 1200px and up) */
  @media (min-width: 1200px) {
  }

  /* Ultra-wide screens (4K displays, 1400px and up) */
  @media (min-width: 1400px) {
    height: 3rem;
    width: 3rem;
  }
`;

export const StyledFaTruck = styled(FaTruck)`
  color: #f9f7f0;

  /* Extra small devices (phones, 320px and up) */
  @media (min-width: 320px) {
    height: 2rem;
    width: 2rem;
  }

  * Large devices (tablets/laptops, 768px and up) */ @media (min-width: 768px) {
    height: 3rem;
    width: 3rem;
  }

  /* Extra large devices (desktops, 992px and up) */
  @media (min-width: 992px) {
  }

  /* Extra extra large devices (large desktops, 1200px and up) */
  @media (min-width: 1200px) {
  }

  /* Ultra-wide screens (4K displays, 1400px and up) */
  @media (min-width: 1400px) {
    height: 3rem;
    width: 3rem;
  }
`;

export const StyledFaCreditCard = styled(FaCreditCard)`
  color: #f9f7f0;

  /* Extra small devices (phones, 320px and up) */
  @media (min-width: 320px) {
    height: 2rem;
    width: 2rem;
  }

  /* Large devices (tablets/laptops, 768px and up) */
  @media (min-width: 768px) {
    height: 3rem;
    width: 3rem;
  }

  /* Extra large devices (desktops, 992px and up) */
  @media (min-width: 992px) {
  }

  /* Extra extra large devices (large desktops, 1200px and up) */
  @media (min-width: 1200px) {
  }

  /* Ultra-wide screens (4K displays, 1400px and up) */
  @media (min-width: 1400px) {
    height: 3rem;
    width: 3rem;
  }
`;

export const Text = styled.p`
  /* Extra small devices (phones, 320px and up) */
  @media (min-width: 320px) {
    width: 70%;
  }

  /* Large devices (tablets/laptops, 768px and up) */
  @media (min-width: 768px) {
    width: 50%;
  }

  /* Extra large devices (desktops, 992px and up) */
  @media (min-width: 992px) {
    width: 50%;
  }

  /* Extra extra large devices (large desktops, 1200px and up) */
  @media (min-width: 1200px) {
    width: 50%;
  }

  /* Ultra-wide screens (4K displays, 1400px and up) */
  @media (min-width: 1400px) {
    width: 50%;
  }
`;
