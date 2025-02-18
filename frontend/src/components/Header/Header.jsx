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
  HeaderBottom,
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
      <HeaderTop>
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
      </HeaderTop>
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
          <Button>
            <FaUser />
            <span>Mi Cuenta</span>
          </Button>
          <Button>
            <FaShoppingCart />
            <span>Carrito</span>
          </Button>
        </AccountCartContainer>
      </HeaderBottom>
    </HeaderContainer>
  );
};

export default Header;
