import styled from "styled-components";
import { media } from "../../styles";

export const CategoriesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
`;

export const CategoryCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  max-width: 600px;
  padding-bottom: 1.5rem;
  cursor: pointer;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.1s ease-out;

  &.in-view {
    opacity: 1;
    transform: translateY(0);
  }

  &:hover {
    transform: scale(1.05);
  }
`;

export const CategoryImage = styled.img`
  width: 100%;
  object-fit: cover;

  ${media.md} {
    height: 200px;
  }

  ${media.xl} {
    height: 300px;
  }
`;

export const CategoryContent = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CategoryTitle = styled.h3`
  padding-top: 1rem;
  color: #333;
`;

export const CategoryDescription = styled.p`
  color: #666;
  width: 70%;

  ${media.md} {
    font-size: 0.8rem;
  }

  ${media.lg} {
    font-size: 1rem;
  }
`;
