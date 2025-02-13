import { Nav, Ul, Li } from "./Navbar.styles";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Nav>
        <Ul>
          <Li>
            <Link to="/">Inicio</Link>
          </Li>
          <Li>
            <Link to="/shop">Tienda</Link>
          </Li>
          <Li>
            <Link to="/cart">Carrito</Link>
          </Li>
          <Li>
            <Link to="/alimentos">Alimentos</Link>
          </Li>
          <Li>
            <Link to="/promociones">Promociones</Link>
          </Li>
          <Li>
            <Link to="/marcas">Marcas</Link>
          </Li>
        </Ul>
      </Nav>
    </>
  );
};

export default Navbar;
