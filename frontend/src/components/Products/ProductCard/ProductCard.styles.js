import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background: #fff;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 280px;
  text-align: center;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  max-height: 200px;
  object-fit: contain;
`;

export const ProductInfo = styled.div`
  padding: 1rem;
`;

export const ProductCategory = styled.span`
  display: block;
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.5rem;
`;

export const ProductName = styled.h3`
  font-size: 1.2rem;
  margin: 0;
`;

export const ProductPrice = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
  color: #2a9d8f;
  margin: 0.5rem 0;
`;

export const AddToCartButton = styled.button`
  background: #9b59b6;
  color: #fff;
  border: 2px solid #9b59b6;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: #8e44ad;
    border-color: #8e44ad;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 5px rgba(155, 89, 182, 0.7);
  }
`;
