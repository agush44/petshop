import { useContext } from "react";
import { Button } from "./BuyNowButton.styles.js";
import { CartContext } from "../../../context/ShopContext";
import { formatPrice } from "../../../utils/formatPrice.js";

const BuyNowButton = () => {
  const { cart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleClick = () => {
    if (cart.length === 0) {
      alert("El carrito está vacío. Agrega productos antes de comprar.");
      return;
    }

    const phoneNumber = "5493424093142";

    const itemsMessage = cart
      .map(
        (item) =>
          `- ${item.name} - Cantidad: ${item.quantity} - Precio: ${formatPrice(
            item.finalPrice
          )}`
      )
      .join("\n");

    const message = `¡Hola! Quiero realizar una compra con los siguientes productos:\n\n${itemsMessage}\n\n Total: ${formatPrice(
      total
    )}`;

    const encodedMessage = encodeURIComponent(message);

    const webWhatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    const newWindow = window.open(webWhatsappUrl, "_blank");

    if (newWindow) {
      newWindow.focus();
    } else {
      alert(
        "No se pudo abrir WhatsApp Web. Verifica que no esté bloqueada las ventanas emergentes."
      );
    }
  };

  return <Button onClick={handleClick}>INICIAR COMPRA</Button>;
};

export default BuyNowButton;
