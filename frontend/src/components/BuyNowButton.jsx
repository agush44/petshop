import { useContext } from "react";
import { CartContext } from "../context/ShopContext.js";
import { StyledButton } from "../UI/Button.styles.js";

const BuyNowButton = () => {
  const { toggleCartAndForm } = useContext(CartContext);

  return (
    <>
      <StyledButton onClick={toggleCartAndForm} aria-label="INICIAR COMPRA">
        INICIAR COMPRA
      </StyledButton>
    </>
  );
};

export default BuyNowButton;
