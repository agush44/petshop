import styled from "styled-components";

export const SearchWrapper = styled.div`
  position: relative;

  /* Extra small devices (phones, less than 576px) */
  @media (max-width: 575.98px) {
    width: 200px;
  }

  /* Small devices (larger phones, 576px and up) */
  @media (min-width: 576px) and (max-width: 767.98px) {
  }

  /* Large devices (tablets/laptops, 768px and up) */
  @media (min-width: 768px) {
    width: 500px;
  }

  /* Extra large devices (desktops, 992px and up) */
  @media (min-width: 992px) {
    width: 600px;
  }

  /* Extra extra large devices (large desktops, 1200px and up) */
  @media (min-width: 1200px) {
    width: 600px;
  }

  /* Ultra-wide screens (4K displays, 1400px and up) */
  @media (min-width: 1400px) {
    width: 600px;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 10px 15px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  box-sizing: border-box;

  &:focus {
    border-color: #007bff;
  }
`;

export const Suggestions = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  max-height: 200px;
  overflow-y: auto;
  margin-top: 5px;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
`;

export const SuggestionItem = styled.li`
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;
