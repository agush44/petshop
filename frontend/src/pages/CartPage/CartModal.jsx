import { useContext } from "react";
import PropTypes from "prop-types";
import { CartContext } from "../../context/ShopContext";
import QuantityInput from "../../components/common/QuantityInput/QuantityInput";
import { FaTrash } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import {
  EmptyCartContainer,
  StyledLink,
  AddProdButton,
  CartModalOverlay,
  CartModalContainer,
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
    <AnimatePresence>
      {isOpen && (
        <CartModalOverlay
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          onClick={closeModal}
        >
          <CartModalContainer
            as={motion.div}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            <CloseButton onClick={closeModal}>X</CloseButton>
            <CartTitle>Carrito de Compras</CartTitle>
            {cart.length === 0 ? (
              <EmptyCartContainer>
                <CartText>El carrito está vacío</CartText>
                <StyledLink to="/shop">
                  <AddProdButton onClick={closeModal}>
                    Agregar productos
                  </AddProdButton>
                </StyledLink>
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
                      onIncrease={() => increaseQuantity(item._id)}
                      onDecrease={() => decreaseQuantity(item._id)}
                      onChange={(e) => {
                        const newQuantity = parseInt(e.target.value, 10);
                        if (!isNaN(newQuantity))
                          updateQuantity(item._id, newQuantity);
                      }}
                    />
                    <RemoveButton onClick={() => removeFromCart(item._id)}>
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
          </CartModalContainer>
        </CartModalOverlay>
      )}
    </AnimatePresence>
  );
};

CartModal.propTypes = {
  isOpen: PropTypes.bool,
  closeModal: PropTypes.func,
};

export default CartModal;
