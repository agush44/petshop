import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Nav,
  Ul,
  StyledLink,
  MobileMenuIcon,
  MobileMenu,
} from "./Navbar.styles";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Nav>
        <Ul>
          <li>
            <StyledLink to="/" onClick={handleLinkClick}>
              Inicio
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/shop" onClick={handleLinkClick}>
              Tienda
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/alimentos" onClick={handleLinkClick}>
              Alimentos
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/novedades" onClick={handleLinkClick}>
              Novedades
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/marcas" onClick={handleLinkClick}>
              Marcas
            </StyledLink>
          </li>
        </Ul>
        <MobileMenuIcon onClick={() => setIsOpen(!isOpen)}>
          <FaBars />
        </MobileMenuIcon>
      </Nav>
      <MobileMenu isOpen={isOpen}>
        <StyledLink to="/" onClick={handleLinkClick}>
          Inicio
        </StyledLink>
        <StyledLink to="/shop" onClick={handleLinkClick}>
          Tienda
        </StyledLink>
        <StyledLink to="/alimentos" onClick={handleLinkClick}>
          Alimentos
        </StyledLink>
        <StyledLink to="/novedades" onClick={handleLinkClick}>
          Novedades
        </StyledLink>
        <StyledLink to="/marcas" onClick={handleLinkClick}>
          Marcas
        </StyledLink>
      </MobileMenu>
    </>
  );
};

export default Navbar;
