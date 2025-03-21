import styled from "styled-components";
import { media } from "../../styles"; // Uso de los breakpoints definidos

export const CategoryCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 2rem;
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  max-width: 600px;
  padding-bottom: 1.5rem;
  cursor: pointer;
  transition: transform 0.1s ease-in-out, opacity 0.9s ease-out,
    transform 0.6s ease-out;
  opacity: 0;
  transform: translateY(20px);

  &.in-view {
    opacity: 1;
    transform: translateY(0);
  }

  &:hover {
    transform: scale(1.05);
  }

  ${media.xs} {
    max-width: 300px;
    margin: 2rem auto;
  }

  ${media.sm} {
    max-width: 350px;
    margin: 2rem 1rem;
  }

  ${media.md} {
    max-width: 300px;
    margin: 2rem 1rem;
  }

  ${media.lg} {
    max-width: 500px;
    margin: 2rem 1rem;
  }

  ${media.xl} {
    max-width: 500px;
    margin: 5rem;
  }
`;

export const CategoryImage = styled.img`
  width: 100%;
  object-fit: cover;

  ${media.md} {
    height: 200px;
  }

  ${media.lg} {
    height: 300px;
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
  text-align: center;
  padding-top: 1.3rem;
  background-color: #fff;
  font-weight: bold;
  color: #1f3a67;
  font-size: 1.3rem;

  ${media.md} {
    font-size: 1.4rem;
  }

  ${media.lg} {
    font-size: 1.5rem;
  }
`;

export const CategoryDescription = styled.p`
  color: #666;
  width: 70%;
  margin: 0 auto;

  ${media.xs} {
    font-size: 0.9rem;
  }

  ${media.md} {
    font-size: 0.7rem;
  }

  ${media.lg} {
    font-size: 0.9rem;
  }
`;
