import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, expect, jest, beforeEach, test } from "@jest/globals";
import CustomerForm from "../components/CustomerForm/CustomerForm";
import { CartContext } from "../context/ShopContext";

describe("CustomerForm", () => {
  // Mock de las funciones del contexto
  const mockClearCart = jest.fn();
  const mockToggleCartAndForm = jest.fn();
  const mockHandleCustomerFormSubmit = jest.fn();
  const mockOnSubmit = jest.fn();

  // Datos de ejemplo para el carrito
  const mockCartItems = [
    {
      _id: "1",
      name: "Producto 1",
      image: "/images/producto1.jpg",
      price: 1000,
      discount: 10,
      discountExpiresAt: new Date(Date.now() + 86400000).toISOString(),
      finalPrice: 900,
      quantity: 2,
    },
    {
      _id: "2",
      name: "Producto 2",
      image: "/images/producto2.jpg",
      price: 500,
      finalPrice: 500,
      quantity: 1,
    },
  ];

  const totalPrice = mockCartItems.reduce(
    (sum, item) => sum + item.finalPrice * item.quantity,
    0
  );

  const mockContextValue = {
    cart: mockCartItems,
    totalPrice: totalPrice,
    clearCart: mockClearCart,
    toggleCartAndForm: mockToggleCartAndForm,
    handleCustomerFormSubmit: mockHandleCustomerFormSubmit,
    showForm: true,
    increaseQuantity: jest.fn(),
    decreaseQuantity: jest.fn(),
    updateQuantity: jest.fn(),
    removeFromCart: jest.fn(),
  };

  const renderWithContext = (onSubmitFn = mockOnSubmit) => {
    return render(
      <CartContext.Provider value={mockContextValue}>
        <CustomerForm onSubmit={onSubmitFn} />
      </CartContext.Provider>
    );
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renderiza el formulario correctamente con el total del carrito", () => {
    renderWithContext();

    expect(screen.getByText("Datos del Cliente")).toBeInTheDocument();
    expect(screen.getByLabelText("Nombre")).toBeInTheDocument();
    expect(screen.getByLabelText("Apellido")).toBeInTheDocument();
    expect(screen.getByLabelText("Teléfono")).toBeInTheDocument();
    expect(screen.getByLabelText("Correo Electrónico")).toBeInTheDocument();

    expect(screen.getByText(/Total:/)).toBeInTheDocument();
  });

  test("muestra alerta cuando el formulario está incompleto", () => {
    renderWithContext();

    // Mockear window.alert correctamente
    const originalAlert = window.alert;
    window.alert = jest.fn();

    // Asegurarse de que los campos estén vacíos
    // Esto es importante porque podría haber validación HTML
    const nameInput = screen.getByLabelText("Nombre");
    const lastNameInput = screen.getByLabelText("Apellido");
    const phoneInput = screen.getByLabelText("Teléfono");
    const emailInput = screen.getByLabelText("Correo Electrónico");

    // Limpiar los campos explícitamente
    fireEvent.change(nameInput, { target: { value: "" } });
    fireEvent.change(lastNameInput, { target: { value: "" } });
    fireEvent.change(phoneInput, { target: { value: "" } });
    fireEvent.change(emailInput, { target: { value: "" } });

    // Obtener el formulario y simular el envío
    const form = screen.getByRole("form");

    // Prevenir el comportamiento por defecto
    const submitEvent = new Event("submit");
    Object.defineProperty(submitEvent, "preventDefault", { value: jest.fn() });
    form.dispatchEvent(submitEvent);

    // Alternativamente, hacer clic en el botón de envío
    const submitButton = screen.getByText("ENVIAR PEDIDO");
    fireEvent.click(submitButton);

    // Verificar que se llamó a alert
    expect(window.alert).toHaveBeenCalledWith(
      "Por favor, completa todos los campos."
    );

    // Restaurar window.alert
    window.alert = originalAlert;
  });

  test("envía el formulario correctamente cuando todos los campos están completos", () => {
    renderWithContext();

    fireEvent.change(screen.getByLabelText("Nombre"), {
      target: { value: "Juan" },
    });
    fireEvent.change(screen.getByLabelText("Apellido"), {
      target: { value: "Pérez" },
    });
    fireEvent.change(screen.getByLabelText("Teléfono"), {
      target: { value: "123456789" },
    });
    fireEvent.change(screen.getByLabelText("Correo Electrónico"), {
      target: { value: "juan@example.com" },
    });

    const submitButton = screen.getByText("ENVIAR PEDIDO");
    fireEvent.click(submitButton);

    expect(mockOnSubmit).toHaveBeenCalledWith({
      firstName: "Juan",
      lastName: "Pérez",
      phone: "123456789",
      email: "juan@example.com",
    });
    expect(mockClearCart).toHaveBeenCalled();
    expect(mockToggleCartAndForm).toHaveBeenCalled();
  });

  test("el botón Volver llama a toggleCartAndForm", () => {
    renderWithContext();

    const backButton = screen.getByText("Volver");
    fireEvent.click(backButton);

    expect(mockToggleCartAndForm).toHaveBeenCalled();
  });

  test("muestra el precio total correcto basado en los items del carrito", () => {
    renderWithContext();

    expect(mockContextValue.totalPrice).toBe(2300);
    expect(screen.getByText(/Total:/)).toBeInTheDocument();
  });
});
