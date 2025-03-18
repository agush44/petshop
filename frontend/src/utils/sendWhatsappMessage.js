export const sendWhatsappMessage = (cart, total, customerData) => {
  const itemsMessage = cart
    .map(
      (item) =>
        `- ${item.name} - Cantidad: ${item.quantity} - Precio: ${item.finalPrice}`
    )
    .join("\n");

  const message = `¡Hola! Quiero realizar una compra con los siguientes productos:\n\n${itemsMessage}\n\nTotal: ${total}\n\nDatos del Cliente:\nNombre: ${customerData.firstName} ${customerData.lastName}\nTeléfono: ${customerData.phone}\nCorreo: ${customerData.email}`;

  const encodedMessage = encodeURIComponent(message);
  const phoneNumber = "5493424093142";
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
