// src/pages/CartPage.js
import Cart from "../components/Cart/Cart.jsx";

const CartPage = () => {
  return (
    <div>
      <h1>Detalles del Carrito 🛒</h1>
      <Cart />
      {/* Aquí podrías agregar más detalles como métodos de pago, dirección, etc. */}
    </div>
  );
};

export default CartPage;
