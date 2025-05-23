import styled from "styled-components";

export const FormContainer = styled.form`
  height: 100%;
  padding: 1rem 2rem;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: #1f3a67;
  margin-bottom: 1rem;
`;

export const InputGroup = styled.div`
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  display: block;
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  font-size: 1rem;
  transition: border-color 0.2s ease;

  &:focus {
    border-color: #3a58d0;
    outline: none;
  }
`;

export const StyledBtnWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  padding: 0 1rem;
`;

export const TotalWrapper = styled.div`
  padding: 0.5rem 0;
`;

export const TotalText = styled.p`
  font-size: 1.8rem;
  font-weight: bold;
  color: #1f3a67;
`;
