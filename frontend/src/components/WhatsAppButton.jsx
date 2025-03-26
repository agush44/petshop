import styled from "styled-components";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "3424093142";
  const message = "¡Hola! Estoy interesado en tus productos";

  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  return (
    <Button aria-label="Abrir WhatsApp" onClick={handleClick}>
      <FaWhatsapp size={30} />
    </Button>
  );
};

export default WhatsAppButton;

const Button = styled.button`
  position: fixed;
  z-index: 9999;
  bottom: 20px;
  right: 20px;
  background-color: #25d366;
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;
