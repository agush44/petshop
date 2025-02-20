import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Nav,
  Ul,
  StyledLink,
  MobileMenuIcon,
  MobileMenuWrapper,
  MobileMenuContent,
} from "./Navbar.styles";
import { FaBars, FaTimes } from "react-icons/fa";

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
              INICIO
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/shop" onClick={handleLinkClick}>
              TIENDA
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/alimentos" onClick={handleLinkClick}>
              ALIMENTOS
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/marcas" onClick={handleLinkClick}>
              MARCAS
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/novedades" onClick={handleLinkClick}>
              NOVEDADES
            </StyledLink>
          </li>
        </Ul>
        <MobileMenuIcon onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuIcon>
      </Nav>
      <MobileMenuWrapper $isOpen={isOpen}>
        <MobileMenuContent>
          <StyledLink to="/" onClick={handleLinkClick}>
            Inicio
          </StyledLink>
          <StyledLink to="/shop" onClick={handleLinkClick}>
            Tienda
          </StyledLink>
          <StyledLink to="/alimentos" onClick={handleLinkClick}>
            Alimentos
          </StyledLink>
          <StyledLink to="/marcas" onClick={handleLinkClick}>
            Marcas
          </StyledLink>
          <StyledLink to="/novedades" onClick={handleLinkClick}>
            Novedades
          </StyledLink>
        </MobileMenuContent>
      </MobileMenuWrapper>
    </>
  );
};

export default Navbar;
