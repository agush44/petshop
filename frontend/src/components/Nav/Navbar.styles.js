import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  width: 100%;
  background-color: #324fc7;
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Baloo 2", serif;
  font-weight: 400;

  /* Extra small devices (phones, less than 576px) */
  @media (max-width: 575.98px) {
    padding: 0.5rem;
    display: flex;
    align-items: center;
  }

  /* Small devices (larger phones, 576px and up) */
  @media (min-width: 576px) and (max-width: 767.98px) {
  }

  /* Large devices (tablets/laptops, 768px and up) */
  @media (min-width: 768px) {
    justify-content: space-around;
    padding: 1rem;
  }

  /* Extra large devices (desktops, 992px and up) */
  @media (min-width: 992px) {
    height: auto;
    padding: 2rem;
    gap: 2rem;
  }

  /* Extra extra large devices (large desktops, 1200px and up) */
  @media (min-width: 1200px) {
    padding: 1.2rem;
  }

  /* Ultra-wide screens (4K displays, 1400px and up) */
  @media (min-width: 1400px) {
    height: 1.8rem;
    padding: 2rem;
  }
`;

export const Ul = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    display: none;
  }

  /* Extra large devices (desktops, 992px and up) */
  @media (min-width: 992px) {
    gap: 3rem;
  }

  /* Extra extra large devices (large desktops, 1200px and up) */
  @media (min-width: 1200px) {
    gap: 5rem;
  }

  /* Ultra-wide screens (4K displays, 1400px and up) */
  @media (min-width: 1400px) {
    gap: 5rem;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 1.2rem;
  color: #f9f7f0;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: rgba(246, 227, 255, 0.84);
  }

  @media (min-width: 768px) {
    font-size: 0.9rem;
  }

  /* Extra large devices (desktops, 992px and up) */
  @media (min-width: 992px) {
  }

  /* Extra extra large devices (large desktops, 1200px and up) */
  @media (min-width: 1200px) {
    font-size: 1rem;
  }

  /* Ultra-wide screens (4K displays, 1400px and up) */
  @media (min-width: 1400px) {
    font-size: 1.2rem;
  }
`;

export const MobileMenuIcon = styled.div`
  font-size: 1.5rem;
  color: #f9f7f0;
  cursor: pointer;
  z-index: 1001;

  /* Extra small devices (phones, less than 576px) */
  @media (max-width: 575.98px) {
    display: flex;
    padding: 0.3rem;
  }

  /* Small devices (larger phones, 576px and up) */
  @media (min-width: 576px) and (max-width: 767.98px) {
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const MobileMenuWrapper = styled.div`
  position: fixed;
  top: 0;
  left: ${(props) => (props.$isOpen ? "0" : "-100%")};
  width: 100%;
  height: 100vh;
  background-color: rgba(50, 79, 199, 0.95);
  transition: left 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const MobileMenuContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;

  ${StyledLink} {
    font-size: 1.5rem;
    color: #f9f7f0;
  }
`;
