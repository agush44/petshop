import { useContext } from "react";
import PropTypes from "prop-types";
import { CartContext } from "../../context/ShopContext";
import QuantityInput from "../../components/common/QuantityInput/QuantityInput";
import { FaTrash } from "react-icons/fa";
import {
  EmptyCartContainer,
  AddProdButton,
  CartModalContainer,
  CartModalOverlay,
  CartModalContent,
  CloseButton,
  CartTitle,
  CartText,
  CartContainer,
  ItemName,
  ContentContainer,
  Img,
  TextContainer,
  Text,
  RemoveButton,
  TotalContainer,
  TotalText,
} from "./CartModal.styles";

const CartModal = ({ isOpen, closeModal }) => {
  const { cart, updateQuantity, removeFromCart } = useContext(CartContext);

  const handleIncreaseQuantity = (productId) => {
    const newQuantity =
      cart.find((item) => item._id === productId).quantity + 1;
    updateQuantity(productId, newQuantity);
  };

  const handleDecreaseQuantity = (productId) => {
    const newQuantity =
      cart.find((item) => item._id === productId).quantity - 1;
    if (newQuantity >= 1) {
      updateQuantity(productId, newQuantity);
    }
  };

  const handleQuantityChange = (e, productId) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (!isNaN(newQuantity) && newQuantity > 0) {
      updateQuantity(productId, newQuantity);
    }
  };

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  const total = cart.reduce((sum, item) => {
    const price = parseFloat(item.price);
    if (!isNaN(price)) {
      return sum + price * item.quantity;
    }
    return sum;
  }, 0);

  return (
    isOpen && (
      <CartModalOverlay>
        <CartModalContainer>
          <CartModalContent>
            <CloseButton onClick={closeModal}>X</CloseButton>
            <CartTitle>Carrito de Compras</CartTitle>
            {cart.length === 0 ? (
              <EmptyCartContainer>
                <CartText>El carrito está vacío</CartText>
                <AddProdButton>Agregar productos</AddProdButton>
              </EmptyCartContainer>
            ) : (
              cart.map((item) => (
                <CartContainer key={item._id}>
                  <ItemName>{item.name}</ItemName>
                  <ContentContainer>
                    <Img src={item.image} alt={item.name} width="50" />
                    <TextContainer>
                      <Text>Precio: ${item.price.toFixed(2)}</Text>
                    </TextContainer>
                    <QuantityInput
                      quantity={item.quantity}
                      onIncrease={() => handleIncreaseQuantity(item._id)}
                      onDecrease={() => handleDecreaseQuantity(item._id)}
                      onChange={(e) => handleQuantityChange(e, item._id)}
                    />
                    <RemoveButton
                      onClick={() => handleRemoveFromCart(item._id)}
                    >
                      <FaTrash size={20} color={`#3a58d0`} />
                    </RemoveButton>
                  </ContentContainer>
                </CartContainer>
              ))
            )}
            {cart.length !== 0 && (
              <TotalContainer>
                <TotalText>Total: ${total.toFixed(2)}</TotalText>
              </TotalContainer>
            )}
          </CartModalContent>
        </CartModalContainer>
      </CartModalOverlay>
    )
  );
};
CartModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default CartModal;
