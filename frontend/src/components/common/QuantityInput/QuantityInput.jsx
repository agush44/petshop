import PropTypes from "prop-types";
import {
  QuantityInputContainer,
  Button,
  QuantityInputStyled,
} from "./QuantityInput.styles";

const QuantityInput = ({ quantity, onIncrease, onDecrease, onChange }) => {
  return (
    <QuantityInputContainer>
      <Button
        aria-label="Restar cantidad"
        onClick={onDecrease}
        disabled={quantity <= 1}
      >
        -
      </Button>
      <QuantityInputStyled
        type="number"
        value={quantity}
        onChange={onChange}
        min="1"
      />
      <Button aria-label="Sumar cantidad" onClick={onIncrease}>
        +
      </Button>
    </QuantityInputContainer>
  );
};

QuantityInput.propTypes = {
  quantity: PropTypes.number.isRequired,
  onIncrease: PropTypes.func.isRequired,
  onDecrease: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default QuantityInput;
