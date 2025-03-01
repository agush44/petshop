import { useState, useContext } from "react";
import { CartContext } from "../../context/ShopContext";
import { ProductContext } from "../../context/ShopContext";
import { FaShoppingCart } from "react-icons/fa";
import CartModal from "../../pages/CartPage/CartModal";
import SearchModal from "./SearchModal/SearchModal";
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
} from "./Header.styles";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const { totalItems } = useContext(CartContext);
  const { searchQuery, setSearchQuery } = useContext(ProductContext);
  const navigate = useNavigate();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const openSearchModal = () => setIsSearchModalOpen(true);
  const closeSearchModal = () => setIsSearchModalOpen(false);

  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      navigate("/shop");
    }
    closeSearchModal();
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
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
            />
            <SearchButton onClick={openSearchModal}>
              <SearchIcon>
                <FaSearch />
              </SearchIcon>
            </SearchButton>
          </SearchContainer>
          <AccountCartContainer>
            <Button onClick={openModal}>
              <FaShoppingCart />
              <span>Carrito</span>
              {totalItems > 0 && <span>({totalItems})</span>}
            </Button>
          </AccountCartContainer>
        </HeaderBottom>
      </HeaderContainer>

      <CartModal isOpen={isModalOpen} closeModal={closeModal} />

      <SearchModal
        isOpen={isSearchModalOpen}
        closeModal={closeSearchModal}
        handleSearch={handleSearch}
      />
    </>
  );
};

export default Header;
