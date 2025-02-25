// src/components/Header.js
import { useState, useContext } from "react";
import { CartContext } from "../../context/ShopContext";
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import CartModal from "../../pages/CartPage/CartModal";
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

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { totalItems } = useContext(CartContext);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
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
            <StyledLink to="/account">
              <Button>
                <FaUser />
                <span>Mi Cuenta</span>
              </Button>
            </StyledLink>
            <Button onClick={openModal}>
              <FaShoppingCart />
              <span>Carrito</span>
              {totalItems > 0 && <span>({totalItems})</span>}
            </Button>
          </AccountCartContainer>
        </HeaderBottom>
      </HeaderContainer>
      <CartModal isOpen={isModalOpen} closeModal={closeModal} />
    </>
  );
};

export default Header;
