import styled from "styled-components";
import { Link } from "react-router-dom";

export const CategoriesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;

  /* Large devices (tablets/laptops, 768px and up) */
  @media (min-width: 768px) {
    margin: 0;
  }

  /* Extra large devices (desktops, 992px and up) */
  @media (min-width: 992px) {
    margin: 0;
  }

  /* Extra extra large devices (large desktops, 1200px and up) */
  @media (min-width: 1200px) {
  }

  /* Ultra-wide screens (4K displays, 1400px and up) */
  @media (min-width: 1400px) {
    height: 65vh;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const CategoryCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 2rem;
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 100%;
  max-width: 600px;
  padding-bottom: 1.5rem;
  cursor: pointer;
  transition: transform 0.1s ease-in-out;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.9s ease-out, transform 0.6s ease-out;

  &.in-view {
    opacity: 1;
    transform: translateY(0);
  }

  &:hover {
    transform: scale(1.05);
  }

  /* Large devices (tablets/laptops, 768px and up) */
  @media (min-width: 768px) {
    max-width: 300px;
    margin: 2rem 1rem;
  }

  /* Extra large devices (desktops, 992px and up) */
  @media (min-width: 992px) {
    max-width: 500px;
    margin: 2rem 1rem;
  }

  /* Extra extra large devices (large desktops, 1200px and up) */
  @media (min-width: 1200px) {
    max-width: 500px;
    margin: 2rem 1rem;
  }

  /* Ultra-wide screens (4K displays, 1400px and up) */
  @media (min-width: 1400px) {
    max-width: 500px;
    margin: 5rem;
  }
`;

export const CategoryImage = styled.img`
  width: 100%;
  object-fit: cover;

  /* Large devices (tablets/laptops, 768px and up) */
  @media (min-width: 768px) {
    height: 200px;
  }

  /* Extra large devices (desktops, 992px and up) */
  @media (min-width: 992px) {
  }

  /* Extra extra large devices (large desktops, 1200px and up) */
  @media (min-width: 1200px) {
    height: 300px;
  }

  /* Ultra-wide screens (4K displays, 1400px and up) */
  @media (min-width: 1400px) {
    height: 300px;
  }
`;

export const CategoryTitle = styled.h3`
  text-align: center;
  padding-top: 1rem;

  background-color: #fff;
  color: #333;

  /* Large devices (tablets/laptops, 768px and up) */
  @media (min-width: 768px) {
    font-size: 1.2rem;
  }

  /* Extra large devices (desktops, 992px and up) */
  @media (min-width: 992px) {
    font-size: 1.5rem;
  }

  /* Extra extra large devices (large desktops, 1200px and up) */
  @media (min-width: 1200px) {
  }

  /* Ultra-wide screens (4K displays, 1400px and up) */
  @media (min-width: 1400px) {
  }
`;

export const CategoryContent = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CategoryDescription = styled.p`
  color: #666;
  width: 70%;

  /* Large devices (tablets/laptops, 768px and up) */
  @media (min-width: 768px) {
    font-size: 0.8rem;
  }

  /* Extra large devices (desktops, 992px and up) */
  @media (min-width: 992px) {
    font-size: 1rem;
  }

  /* Extra extra large devices (large desktops, 1200px and up) */
  @media (min-width: 1200px) {
  }

  /* Ultra-wide screens (4K displays, 1400px and up) */
  @media (min-width: 1400px) {
  }
`;
