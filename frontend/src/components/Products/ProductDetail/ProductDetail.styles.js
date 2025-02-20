import styled from "styled-components";

export const TotalDetailContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const DetailContainer = styled.div`
  display: flex;
  padding: 3rem;
  align-items: center;
  height: 45vh;
  max-width: 800px;
  margin: 4rem 0;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

export const DetailImage = styled.img`
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  border-radius: 8px;
`;

export const DetailInfo = styled.div`
  text-align: center;
  margin-top: 20px;
`;

export const DetailCategory = styled.p`
  font-size: 14px;
  color: #666;
`;

export const DetailName = styled.h1`
  font-size: 24px;
  margin: 10px 0;
`;

export const DetailPrice = styled.p`
  font-size: 20px;
  color: #333;
  font-weight: bold;
`;

export const DetailDescription = styled.p`
  font-size: 16px;
  color: #444;
  margin: 10px 0;
`;

export const PaymentShippingText = styled.p`
  font-size: 1em;
  color: #777;
  margin-top: 20px;
`;

export const AddToCartButton = styled.button`
  background: #9b59b6;
  color: #fff;
  border: 2px solid #9b59b6;
  color: white;
  border: none;
  padding: 10px;
  font-size: 1rem;
  cursor: pointer;
  margin-right: 1rem;
  border-radius: 5px;
  margin-top: 1rem;
  &:hover {
    background: #8e44ad;
    border-color: #8e44ad;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 5px rgba(155, 89, 182, 0.7);
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

  &:hover {
    background-color: #2f47a0;
  }
`;
