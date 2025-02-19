import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  width: 100%;
  background-color: #324fc7;
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Baloo 2", serif;
  font-weight: 400;

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
  }

  /* Ultra-wide screens (4K displays, 1400px and up) */
  @media (min-width: 1400px) {
    height: auto;
    padding: 2rem;
  }
`;

export const Ul = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;
  margin: 0;
  padding: 0;

  /* Large devices (tablets/laptops, 768px and up) */
  @media (min-width: 768px) {
    gap: 1rem;
  }

  /* Extra large devices (desktops, 992px and up) */
  @media (min-width: 992px) {
  }

  /* Extra extra large devices (large desktops, 1200px and up) */
  @media (min-width: 1200px) {
    gap: 2rem;
  }

  /* Ultra-wide screens (4K displays, 1400px and up) */
  @media (min-width: 1400px) {
    gap: 2rem;
  }
`;

export const StyledLink = styled(Link)`
  margin: 0 1rem;
  text-decoration: none;
  font-size: 1.2rem;
  color: #f9f7f0;
  cursor: pointer;
  transition: color 0.3s ease;
  text-shadow: 6px 6px 7px rgba(0, 0, 0, 0.5);

  &:hover {
    color: rgba(246, 227, 255, 0.84);
  }

  /* Large devices (tablets/laptops, 768px and up) */
  @media (min-width: 768px) {
    font-size: 0.9rem;
  }
  /* Extra large devices (desktops, 992px and up) */
  @media (min-width: 992px) {
  }

  /* Extra extra large devices (large desktops, 1200px and up) */
  @media (min-width: 1200px) {
  }

  /* Ultra-wide screens (4K displays, 1400px and up) */
  @media (min-width: 1400px) {
    font-size: 1.2rem;
  }
`;

export const MobileMenuIcon = styled.div`
  display: none;
  font-size: 1.5rem;
  color: #f9f7f0;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const MobileMenu = styled.div`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  flex-direction: column;
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
  background-color: #3a58d0;
  padding: 1rem 0;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);

  ${StyledLink} {
    padding: 1rem;
    color: #f9f7f0;
    text-align: center;
  }
`;
