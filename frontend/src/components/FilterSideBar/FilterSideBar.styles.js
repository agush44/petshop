import styled from "styled-components";

export const FilterSidebarContainer = styled.aside`
  padding: 1.5rem;
  margin-left: 2rem;
  background-color: rgba(58, 88, 208, 0.88);
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  height: 100%;
  margin-top: 2rem;
  border-radius: 1rem;

  /* Large devices (tablets/laptops, 768px and up) */
  @media (min-width: 768px) {
    width: 30%;
  }

  /* Extra large devices (desktops, 992px and up) */
  @media (min-width: 992px) {
    width: 20%;
  }

  /* Extra extra large devices (large desktops, 1200px and up) */
  @media (min-width: 1200px) {
    width: 20%;
  }

  /* Ultra-wide screens (4K displays, 1400px and up) */
  @media (min-width: 1400px) {
    width: 20%;
  }
`;

export const Title = styled.h3`
  color: #fff;
  font-weight: 400;

  /* Large devices (tablets/laptops, 768px and up) */
  @media (min-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 10px;
  }

  /* Extra large devices (desktops, 992px and up) */
  @media (min-width: 992px) {
    font-size: 1rem;
    margin-bottom: 10px;
  }

  /* Extra extra large devices (large desktops, 1200px and up) */
  @media (min-width: 1200px) {
    font-size: 1rem;
    margin-bottom: 10px;
  }

  /* Ultra-wide screens (4K displays, 1400px and up) */
  @media (min-width: 1400px) {
    font-size: 1rem;
    margin-bottom: 10px;
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 8px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;

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
