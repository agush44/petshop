import styled from "styled-components";
import { Link } from "react-router-dom";

// Contenedor para las cards
export const CategoriesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 55vh;
  flex-wrap: wrap;
`;

// Estilo de los links
export const StyledLink = styled(Link)`
  text-decoration: none;
`;

// Estilo de la card
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
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

// Estilo de la imagen de la card
export const CategoryImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
`;

// Estilo del título de la card
export const CategoryTitle = styled.h3`
  text-align: center;
  padding-top: 1rem;
  font-size: 1.5rem;
  background-color: #fff;
  color: #333;
`;

export const CategoryContent = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CategoryDescription = styled.p`
  font-size: 1rem;
  color: #666;
  width: 70%;
`;
