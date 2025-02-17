import { Nav, Ul, StyledLink } from "./Navbar.styles";

const Navbar = () => {
  return (
    <>
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
            <StyledLink to="/promociones">Promociones</StyledLink>
          </li>
          <li>
            <StyledLink to="/marcas">Marcas</StyledLink>
          </li>
        </Ul>
      </Nav>
    </>
  );
};

export default Navbar;
