import { Nav, Ul, Li } from "./Navbar.styles";

const Navbar = () => {
  return (
    <>
      <Nav>
        <Ul>
          <Li>Inicio</Li>
          <Li>Alimentos</Li>
          <Li>Tienda</Li>
          <Li>Promociones</Li>
          <Li>Marcas</Li>
        </Ul>
      </Nav>
    </>
  );
};

export default Navbar;
