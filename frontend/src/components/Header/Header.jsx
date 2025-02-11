import {
  HeaderContainer,
  HeaderTop,
  Logo,
  SearchBar,
  SocialIcons,
  SocialIcon,
  AccountCartContainer,
  Button,
  SearchIcon,
  SearchContainer,
  SearchButton,
} from "./Header.styles";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaSearch,
  FaUser,
  FaShoppingCart,
} from "react-icons/fa";

const Header = () => {
  return (
    <HeaderContainer>
      {/* Parte superior con logo, buscador e íconos de redes sociales */}
      <SocialIcons>
        <SocialIcon href="https://facebook.com" target="_blank">
          <FaFacebookF />
        </SocialIcon>
        <SocialIcon href="https://instagram.com" target="_blank">
          <FaInstagram />
        </SocialIcon>
        <SocialIcon href="https://twitter.com" target="_blank">
          <FaTwitter />
        </SocialIcon>
      </SocialIcons>
      <HeaderTop>
        <Logo src="logo.png" alt="Logo PetShop" />
        <SearchContainer>
          <SearchBar type="text" placeholder="Buscar productos..." />
          <SearchButton>
            <SearchIcon>
              <FaSearch />
            </SearchIcon>
          </SearchButton>
        </SearchContainer>
        {/* Botones de Mi cuenta y Carrito */}
        <AccountCartContainer>
          <Button>
            <FaUser />
            <span>Mi Cuenta</span>
          </Button>
          <Button>
            <FaShoppingCart />
            <span>Carrito</span>
          </Button>
        </AccountCartContainer>
      </HeaderTop>
    </HeaderContainer>
  );
};

export default Header;
