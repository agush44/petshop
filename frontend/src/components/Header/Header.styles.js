import styled from "styled-components";

// Contenedor principal del header
export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  border: none;
`;

// Fila para los elementos del encabezado superior
export const HeaderTop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(
    0deg,
    rgb(232, 222, 242) 20%,
    rgb(209, 208, 230) 50%,
    rgb(174, 190, 230) 100%
  );

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1rem 1rem 1rem;
  z-index: 1000;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
`;

// Logo a la izquierda
export const Logo = styled.img`
  width: 5.5rem;
  margin-left: 1rem;
`;

// Fila que contiene la barra de búsqueda y el botón con ícono
export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 45%;
  margin-left: 5rem;
  border: none;
  box-shadow: -2px 13px 28px -4px rgba(0, 0, 0, 0.48);
  -webkit-box-shadow: -2px 13px 28px -4px rgba(0, 0, 0, 0.48);
  -moz-box-shadow: -2px 13px 28px -4px rgba(0, 0, 0, 0.48);
`;

// Barra de búsqueda
export const SearchBar = styled.input`
  height: 100%;
  border: none;
  padding: 0.7rem;
  width: 100%;
  border: none;
  font-size: 0.8rem;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;

  &:focus {
    outline: none;
  }
`;

// Botón de búsqueda con el ícono de lupa
export const SearchButton = styled.button`
  height: 45px;
  width: 43px;
  background-color: #3a58d0;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border: none;
  padding: 0.55rem;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

// Ícono de lupa
export const SearchIcon = styled.i`
  font-size: 20px;
  color: #f9f7f0;
`;

// Contenedor para los íconos de redes sociales
export const SocialIcons = styled.div`
  display: flex;
  gap: 0.6rem;
  justify-content: flex-end;
  padding-top: 1rem;
  padding-right: 1rem;
  z-index: 10000;
`;

// Icono individual de redes sociales
export const SocialIcon = styled.a`
  font-size: 1em;
  color: #f9f7f0;
  text-decoration: none;
`;

// Contenedor de los botones de cuenta y carrito
export const AccountCartContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
`;

export const Button = styled.button`
  font-weight: 400;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: transparent; /* Fondo transparente */
  border: none;
  padding: 0 1rem;
  cursor: pointer;

  svg {
    font-size: 1.5rem;
    margin-bottom: 0.3rem;
    color: #324dba;
  }

  span {
    font-size: 0.9rem;
    color: #324dba;
  }
`;
