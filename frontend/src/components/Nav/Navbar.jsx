import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Nav, Ul, StyledLink } from "./Navbar.styles";

const Navbar = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Nav>
      <Ul>
        <li>
          <StyledLink to="/">Inicio</StyledLink>
        </li>
        <li>
          <StyledLink to="/shop">Tienda</StyledLink>
        </li>
        <li>
          <StyledLink to="/alimentos">Alimentos</StyledLink>
        </li>
        <li>
          <StyledLink to="/novedades">Novedades</StyledLink>
        </li>
        <li>
          <StyledLink to="/marcas">Marcas</StyledLink>
        </li>
      </Ul>
    </Nav>
  );
};

export default Navbar;
