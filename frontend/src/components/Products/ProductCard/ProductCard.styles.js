import styled from "styled-components";
import { Link } from "react-router-dom";

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
    transform: scale(1.02);
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
  font-size: 1.2rem;
  color: #2a9d8f;
  margin: 0.5rem 0;
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

export const ExpiredPromotion = styled.span`
  color: red;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 1rem;
  gap: 1rem;
`;

export const Button = styled.button`
  width: 50%;
  height: 2.5rem;
  color: #fff;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  display: inline-block;
  border: 2px solid;

  &:focus {
    outline: none;
    box-shadow: 0 0 5px rgba(155, 89, 182, 0.7);
  }

  &.buy {
    background: #9b59b6;
    border-color: #9b59b6;

    &:hover {
      background: #8e44ad;
      border-color: #8e44ad;
    }
  }

  &.view {
    background-color: #3a59ce;
    border: none;
    width: 100%;

    &:hover {
      background-color: #2f47a0;
    }
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  width: 50%;
  display: inline-block;
  color: inherit;
`;
