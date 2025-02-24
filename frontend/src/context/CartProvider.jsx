import { useState } from "react";
import PropTypes from "prop-types";
import { CartContext } from "./ShopContext";

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const productExists = cart.find((item) => item._id === product._id);

    if (!productExists) {
      setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
      console.log(cart);
    } else {
      updateQuantity(product._id, productExists.quantity + 1);
      console.log(cart);
    }
  };

  const updateQuantity = (productId, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item._id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
    console.log(cart);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((product) => product._id !== productId));
    console.log(cart);
  };

  const clearCart = () => setCart([]);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartProvider;
