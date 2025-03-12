import styled from "styled-components";

export const Button = styled.button`
  background-color: #1f3a67;
  width: 90%;
  color: #fff;
  font-size: 0.9rem;
  padding: 0.9rem;
  margin-top: 1rem;
  border-radius: 8rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.1s ease, transform 0.1s ease;
  font-family: "Montserrat", sans-serif;
  color: #fffcf5;
  fill: #fffcf5;
  letter-spacing: 2px;
  font-weight: bold;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    background-color: #1e3c72;
    transform: scale(0.98);
  }
`;
