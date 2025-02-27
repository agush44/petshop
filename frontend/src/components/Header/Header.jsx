import { useState, useContext } from "react";
import { CartContext } from "../../context/ShopContext";
import { ProductContext } from "../../context/ShopContext";
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
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { totalItems } = useContext(CartContext);
  const { searchQuery, setSearchQuery } = useContext(ProductContext);
  const navigate = useNavigate();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      navigate("/shop"); // Redirige a la página de productos
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      <HeaderContainer>
        <HeaderBottom>
          <Logo src="logo.png" alt="Logo PetShop" />
          <SearchContainer>
            <SearchBar
              type="text"
              placeholder="Buscar productos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyPress}
            />
            <SearchButton onClick={handleSearch}>
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
