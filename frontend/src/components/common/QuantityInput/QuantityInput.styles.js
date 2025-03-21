import styled from "styled-components";

export const QuantityInputContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #1f3a67;
  border-radius: 15px;
  overflow: hidden;
  background-color: #fff;
`;

export const QuantityInputStyled = styled.input`
  width: 50px;
  height: 30px;
  text-align: center;
  font-size: 1rem;
  border: none; 
  background-color: transparent;
  outline: none;
  color: #1f3a67;

   /* Eliminar las flechas del input tipo number */
  -webkit-appearance: none;  /* Chrome, Safari */
  -moz-appearance: textfield;  /* Firefox */

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &::-moz-appearance: textfield;  /* Firefox */
`;

export const Button = styled.button`
  padding: 2px 10px;
  border: none;
  background-color: #fff;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 400;
  color: #1f3a67;
`;
