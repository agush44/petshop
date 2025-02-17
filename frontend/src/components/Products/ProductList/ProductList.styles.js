import styled from "styled-components";

export const ProductListContainer = styled.div`
  margin-top: 12rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
  padding: 2rem;
  margin-bottom: 7rem;
`;

export const Button = styled.div`
  background-color: #3a58cf;
  color: #fff;
  border: none;
  margin: 2rem 0;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #2851a3;
  }
`;
