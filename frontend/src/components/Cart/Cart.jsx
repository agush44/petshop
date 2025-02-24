import { useContext } from "react";
import CartContext from "../../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div>
      <h2>Carrito</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item._id}>
              <img src={item.image} alt={item.name} width="50" />
              {item.name} - ${item.price.toFixed(2)} x {item.quantity}
              <button onClick={() => removeFromCart(item._id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      )}
      <Link to="/cart">Ir al carrito</Link>
    </div>
  );
};

export default Cart;
