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
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    updateQuantity,
    removeFromCart,
  } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

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
                  {" "}
                  {/* Cambio de `id` a `_id` */}
                  <ItemName>{item.name}</ItemName>
                  <ContentContainer>
                    <Img src={item.image} alt={item.name} width="50" />
                    <TextContainer>
                      <Text>Precio: ${item.price.toFixed(2)}</Text>
                    </TextContainer>
                    <QuantityInput
                      quantity={item.quantity}
                      onIncrease={() => increaseQuantity(item._id)} // Cambio de `id` a `_id`
                      onDecrease={() => decreaseQuantity(item._id)} // Cambio de `id` a `_id`
                      onChange={(e) => {
                        const newQuantity = parseInt(e.target.value, 10);
                        if (!isNaN(newQuantity))
                          updateQuantity(item._id, newQuantity); // Cambio de `id` a `_id`
                      }}
                    />
                    <RemoveButton onClick={() => removeFromCart(item._id)}>
                      {" "}
                      {/* Cambio de `id` a `_id` */}
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
  isOpen: PropTypes.bool,
  closeModal: PropTypes.func,
};

export default CartModal;
