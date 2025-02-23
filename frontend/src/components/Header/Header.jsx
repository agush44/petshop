import { useContext } from "react";
import { CartContext } from "../../context/ShopContext";
import {
  HeaderContainer,
  Logo,
  SearchBar,
  AccountCartContainer,
  Button,
  SearchIcon,
  SearchContainer,
  SearchButton,
  HeaderBottom,
  StyledLink,
} from "./Header.styles";
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";

const Header = () => {
  const { totalItems } = useContext(CartContext);
  return (
    <HeaderContainer>
      <HeaderBottom>
        <Logo src="logo.png" alt="Logo PetShop" />
        <SearchContainer>
          <SearchBar type="text" placeholder="Buscar productos..." />
          <SearchButton>
            <SearchIcon>
              <FaSearch />
            </SearchIcon>
          </SearchButton>
        </SearchContainer>
        <AccountCartContainer>
          <StyledLink to="/cart">
            <Button>
              <FaUser />
              <span>Mi Cuenta</span>
            </Button>
          </StyledLink>
          <StyledLink to="/cart">
            <Button>
              <FaShoppingCart />
              <span>Carrito</span>
              {totalItems > 0 && <span>({totalItems})</span>}
            </Button>
          </StyledLink>
        </AccountCartContainer>
      </HeaderBottom>
    </HeaderContainer>
  );
};

export default Header;
