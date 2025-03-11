import styled from "styled-components";

export const TotalDetailContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: auto;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 900px;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 2.5rem;
  margin: 4rem 0;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 1.5rem;
  }
`;

export const DetailImage = styled.img`
  width: 50%;
  max-height: 500px;
  object-fit: cover;
  border-radius: 8px;

  @media (max-width: 768px) {
    width: 100%;
    max-height: 300px;
  }
`;

export const DetailInfo = styled.div`
  text-align: start;
  padding: 1rem 2.5rem;
  flex: 1;

  @media (max-width: 768px) {
    padding: 1rem;
    text-align: center;
  }
`;

export const DetailCategory = styled.p`
  font-size: 1rem;
  color: #666;
`;

export const DetailName = styled.h1`
  font-size: clamp(1.8rem, 5vw, 2.3rem);
  margin: 10px 0;
  color: #333;
  font-weight: bold;
`;

export const DiscountedPrice = styled.span`
  text-decoration: line-through;
  margin-right: 0.5rem;
  color: #e74c3c;
`;

export const DiscountPercentage = styled.span`
  display: block;
  font-size: 1rem;
  color: #e74c3c;
  margin-top: 0.5rem;
  font-weight: bold;
`;

export const NewPrice = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const ProductPrice = styled.p`
  font-size: 1.2rem;
  color: #2a9d8f;
  margin: 0.5rem 0;
  font-weight: bold;
`;

export const DetailDescription = styled.p`
  font-size: 1rem;
  color: #444;
  padding: 1rem 1.5rem 1rem 0;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 0;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const PaymentShippingText = styled.p`
  font-size: 1em;
  color: #777;
  margin-left: 0.5rem;
`;

export const AddToCartButton = styled.button`
  background: #9b59b6;
  color: #fff;
  border: 2px solid #9b59b6;
  padding: 10px;
  font-size: 1rem;
  cursor: pointer;
  margin-right: 1rem;
  border-radius: 5px;
  margin-top: 1rem;
  transition: 0.3s ease-in-out;

  &:hover {
    background: #8e44ad;
    border-color: #8e44ad;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 5px rgba(155, 89, 182, 0.7);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const BackButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #3a58d0;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: #2f47a0;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
