import styled from "styled-components";
import { Link } from "react-router-dom";

export const CategoriesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 55vh;
  flex-wrap: wrap;
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
  transition: transform 0.2s ease-in-out;
  opacity: 0; /* Empezamos con opacidad 0 */
  transform: translateY(20px); /* Desplazamos ligeramente hacia abajo */
  transition: opacity 0.9s ease-out, transform 0.9s ease-out; /* Suavizamos la animación */

  &.in-view {
    opacity: 1; /* Al entrar en la vista, establecemos la opacidad */
    transform: translateY(0); /* Volvemos a la posición original */
  }

  &:hover {
    transform: scale(1.05);
  }
`;

export const CategoryImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
`;

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
