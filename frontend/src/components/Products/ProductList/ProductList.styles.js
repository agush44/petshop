import styled from "styled-components";

export const ProductListContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
  padding: 2rem;
  margin-bottom: 2rem;
`;

export const MoreButton = styled.button`
  background-color: #3a58cf;
  width: 10%;
  text-align: center;
  color: #fff;
  margin: 0 auto;
  display: block;
  border: none;
  margin: 1rem auto;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #2851a3;
  }
`;

export const Title = styled.div`
  font-size: 2rem;
  text-align: start;
  margin-left: 8rem;
  margin-top: 2rem;
`;
