import styled from "styled-components";
import { Link } from "react-router-dom";

// Contenedor del nav
export const Nav = styled.nav`
  position: fixed;
  top: 8.1rem; /* Ajusta según la altura del HeaderTop */
  left: 0;
  width: 100%;
  background-color: #3a58d0;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Baloo 2", serif;
  font-weight: 400;
  z-index: 999;
`;

// Estilo para la lista
export const Ul = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;
  margin: 0;
  padding: 0;
`;

export const StyledLink = styled(Link)`
  margin: 0 1rem;
  text-decoration: none;
  font-size: 1.2rem;
  color: #f9f7f0;
  cursor: pointer;
  transition: color 0.3s ease;
  text-shadow: 6px 6px 7px rgba(0, 0, 0, 0.5);
  &:hover {
    color: rgba(246, 227, 255, 0.84);
  }
`;
