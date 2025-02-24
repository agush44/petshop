import { useContext } from "react";
import { CartContext } from "../context/ShopContext";

const CartPage = () => {
  const { cart, updateQuantity, removeFromCart } = useContext(CartContext);

  const handleIncreaseQuantity = (productId) => {
    updateQuantity(
      productId,
      cart.find((item) => item._id === productId).quantity + 1
    );
  };

  const handleDecreaseQuantity = (productId) => {
    updateQuantity(
      productId,
      cart.find((item) => item._id === productId).quantity - 1
    );
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
    <div>
      <h1>Carrito</h1>
      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        cart.map((item) => (
          <div key={item._id}>
            <h3>{item.name}</h3>
            <p>Cantidad: {item.quantity}</p>
            <p>Precio: ${item.price.toFixed(2)}</p>
            <button onClick={() => handleIncreaseQuantity(item._id)}>+</button>
            <button onClick={() => handleDecreaseQuantity(item._id)}>-</button>
            <button onClick={() => handleRemoveFromCart(item._id)}>
              Eliminar
            </button>
          </div>
        ))
      )}
      <div>
        <h3>Total: ${total.toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default CartPage;
