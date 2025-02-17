import { Button } from "./BuyNowButton.styles.js";
import { fetchProducts } from "../../../services/Api.js";

const handleClick = async () => {
  try {
    const data = await fetchProducts();
    console.log(data);
  } catch (error) {
    console.error("Error al obtener productos", error);
  }
};

const BuyNowButton = () => {
  return <Button onClick={handleClick}>Comprar ahora</Button>;
};

export default BuyNowButton;
