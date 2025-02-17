import styled from "styled-components";

// Estilo del botón
export const Button = styled.button`
  background-color: #3a58cf;
  color: #fff;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 0.9rem;
  margin-top: 2rem;
  border-radius: 8rem;
  border: none;
  cursor: pointer; /* Cambia el cursor cuando pasa por encima */
  transition: background-color 0.1s ease, transform 0.1s ease; /* Animación suave */

  &:hover {
    background-color: #2851a3;
    transform: scale(1.05);
  }

  &:active {
    background-color: #1e3c72;
    transform: scale(0.98);
  }
`;
