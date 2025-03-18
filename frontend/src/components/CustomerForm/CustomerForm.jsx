import { useState, useContext } from "react";
import PropTypes from "prop-types";
import { CartContext } from "../../context/ShopContext";
import {
  FormContainer,
  Title,
  InputGroup,
  Label,
  Input,
} from "./CustomerForm.styles";
import { StyledButton } from "../../UI/Button.styles";

const CustomerForm = ({ onSubmit }) => {
  const { totalPrice, clearCart, toggleCartAndForm } = useContext(CartContext);

  const [customerData, setCustomerData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !customerData.firstName ||
      !customerData.lastName ||
      !customerData.phone ||
      !customerData.email
    ) {
      alert("Por favor, completa todos los campos.");
      return;
    }
    onSubmit(customerData);
    clearCart();
    toggleCartAndForm();
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Title>Datos del Cliente</Title>

      <InputGroup>
        <Label htmlFor="firstName">Nombre</Label>
        <Input
          type="text"
          id="firstName"
          name="firstName"
          value={customerData.firstName}
          onChange={handleInputChange}
          required
        />
      </InputGroup>

      <InputGroup>
        <Label htmlFor="lastName">Apellido</Label>
        <Input
          type="text"
          id="lastName"
          name="lastName"
          value={customerData.lastName}
          onChange={handleInputChange}
          required
        />
      </InputGroup>

      <InputGroup>
        <Label htmlFor="phone">Teléfono</Label>
        <Input
          type="tel"
          id="phone"
          name="phone"
          value={customerData.phone}
          onChange={handleInputChange}
          required
        />
      </InputGroup>

      <InputGroup>
        <Label htmlFor="email">Correo Electrónico</Label>
        <Input
          type="email"
          id="email"
          name="email"
          value={customerData.email}
          onChange={handleInputChange}
          required
        />
      </InputGroup>

      <div>
        <p>Total: {totalPrice}</p>
      </div>

      <StyledButton type="submit">Enviar Pedido</StyledButton>
    </FormContainer>
  );
};

CustomerForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default CustomerForm;
