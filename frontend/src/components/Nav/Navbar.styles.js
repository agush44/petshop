import styled from "styled-components";

// Contenedor del nav
export const Nav = styled.nav`
  background-color: rgba(58, 88, 207, 0.84);
  padding: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 1px 36px -7px rgba(0, 0, 0, 0.15) inset;
  -webkit-box-shadow: 1px 1px 36px -7px rgba(0, 0, 0, 0.15) inset;
  -moz-box-shadow: 1px 1px 36px -7px rgba(0, 0, 0, 0.15) inset;
  font-family: "Baloo 2", serif;
  font-weight: 400;
`;

// Estilo para la lista
export const Ul = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;
  margin: 0;
  padding: 0;
`;

// Estilo para cada elemento de la lista
export const Li = styled.li`
  margin: 0 20px;
  font-size: 1.2rem;
  color: #f9f7f0;
  cursor: pointer;
  transition: color 0.3s ease;
  text-shadow: 6px 6px 7px rgba(0, 0, 0, 0.5);

  &:hover {
    color: rgba(246, 227, 255, 0.84);
  }
`;
