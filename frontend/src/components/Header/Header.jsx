import { useState, useContext } from "react";
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
        <Logo src="logo.png" alt="Logo PetShop" />
        <SearchBar />
        <AccountCartContainer>
          <Button onClick={openModal}>
            <FaShoppingCart />
            <span>Carrito</span>
            {totalItems > 0 && <span>({totalItems})</span>}
          </Button>
        </AccountCartContainer>
      </HeaderContainer>
      <CartModal isOpen={isModalOpen} closeModal={closeModal} />
    </>
  );
};

export default Header;
