import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import PropTypes from "prop-types";
import { CartContext } from "./ShopContext";
import { formatPrice } from "../utils/formatPrice";
import { sendWhatsappMessage } from "../utils/sendWhatsappMessage";

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (newProduct) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(
        (item) => item._id === newProduct._id
      );

      const finalPrice = newProduct.discount
        ? newProduct.price * (1 - newProduct.discount / 100)
        : newProduct.price;

      if (existingProduct) {
        toast.success("Producto agregado al carrito 🛒", {
          duration: 3000,
          position: "end-center",
        });

        return prevCart.map((item) =>
          item._id === newProduct._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      toast.success("Producto agregado al carrito 🛒", {
        duration: 3000,
        position: "end-center",
      });

      return [...prevCart, { ...newProduct, quantity: 1, finalPrice }];
    });
  };

  const toggleCartAndForm = () => {
    setShowForm((prev) => {
      console.log("Valor anterior:", prev, "Nuevo valor:", !prev);
      return !prev;
    });
  };

  const increaseQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item._id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item._id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const updateQuantity = (productId, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item._id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) =>
      prevCart.filter((product) => product._id !== productId)
    );

    toast.success("Producto eliminado del carrito 🗑️", {
      duration: 3000,
      position: "end-center",
    });
  };

  const clearCart = () => setCart([]);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = formatPrice(
    cart.reduce((sum, item) => sum + item.finalPrice * item.quantity, 0)
  );

  const handleCustomerFormSubmit = (data) => {
    sendWhatsappMessage(cart, totalPrice, data);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
        showForm,
        toggleCartAndForm,
        handleCustomerFormSubmit,
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
