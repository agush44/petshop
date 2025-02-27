import styled from "styled-components";

export const FilterSidebarContainer = styled.aside`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0.8rem;
  background-color: rgba(58, 88, 208, 0.88);
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  height: 100%;
  width: 100%;

  /* Large devices (tablets/laptops, 768px and up) */
  @media (min-width: 768px) {
  }

  /* Extra large devices (desktops, 992px and up) */
  @media (min-width: 992px) {
  }

  /* Extra extra large devices (large desktops, 1200px and up) */
  @media (min-width: 1200px) {
  }

  /* Ultra-wide screens (4K displays, 1400px and up) */
  @media (min-width: 1400px) {
  }
`;

export const Title = styled.h3`
  color: #fff;
  font-weight: 400;
  padding: 0 1rem 0 2rem;
  /* Large devices (tablets/laptops, 768px and up) */
  @media (min-width: 768px) {
    font-size: 0.9rem;
  }

  /* Extra large devices (desktops, 992px and up) */
  @media (min-width: 992px) {
    font-size: 1rem;
  }

  /* Extra extra large devices (large desktops, 1200px and up) */
  @media (min-width: 1200px) {
    font-size: 1rem;
  }

  /* Ultra-wide screens (4K displays, 1400px and up) */
  @media (min-width: 1400px) {
    font-size: 1rem;
  }
`;

export const Select = styled.select`
  width: 10%;
  height: 2.7rem;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;

  /* Large devices (tablets/laptops, 768px and up) */
  @media (min-width: 768px) {
    font-size: 0.9rem;
  }

  /* Extra large devices (desktops, 992px and up) */
  @media (min-width: 992px) {
    font-size: 0.9rem;
  }

  /* Extra extra large devices (large desktops, 1200px and up) */
  @media (min-width: 1200px) {
    font-size: 0.9rem;
  }

  /* Ultra-wide screens (4K displays, 1400px and up) */
  @media (min-width: 1400px) {
    font-size: 0.9rem;
  }
`;
