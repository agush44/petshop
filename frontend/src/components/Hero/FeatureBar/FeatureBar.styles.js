import styled from "styled-components";

export const FeatureBarContainer = styled.div`
  width: 100%;
  height: 25%;
  background-color: #3a58cf;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-shadow: 1px 1px 36px -7px rgba(0, 0, 0, 0.15) inset;
  -webkit-box-shadow: 1px 1px 36px -7px rgba(0, 0, 0, 0.15) inset;
  -moz-box-shadow: 1px 1px 36px -7px rgba(0, 0, 0, 0.15) inset;
  gap: 3rem;
  padding-left: 5%;
  color: #f9f7f0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    height: auto;
    padding: 1rem 5%;
  }
`;

export const FeatureItem = styled.div`
  color: #f9f7f0;
  display: flex;
  align-items: center;
  gap: 1.2rem;
  font-size: 1rem;
  font-weight: 500;
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
  width: 45%;
`;
