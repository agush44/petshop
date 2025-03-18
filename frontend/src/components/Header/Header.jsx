import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/ShopContext";
import { FaShoppingCart } from "react-icons/fa";
import CartModal from "../../pages/CartPage/CartModal";
import SearchBar from "./SearchBar/SearchBar";
import {
  HeaderContainer,
  Logo,
  AccountCartContainer,
  Button,
} from "./Header.styles";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { totalItems } = useContext(CartContext);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <HeaderContainer>
        <Link to="/">
          <Logo src="logo.webp" alt="Logo PetShop" />
        </Link>
        <SearchBar />
        <AccountCartContainer>
          <Button onClick={openModal}>
            <FaShoppingCart />
            <span>Carrito</span>
            {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
          </Button>
        </AccountCartContainer>
      </HeaderContainer>
      <CartModal isOpen={isModalOpen} closeModal={closeModal} />
    </>
  );
};

export default Header;
