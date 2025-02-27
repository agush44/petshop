import PropTypes from "prop-types";
import { memo } from "react";
import { useContext } from "react";
import { CartContext } from "../../../context/ShopContext";
import toast from "react-hot-toast";
import {
  Card,
  ProductImage,
  ProductInfo,
  ProductCategory,
  ProductName,
  ProductPrice,
  ButtonContainer,
  Button,
  StyledLink,
} from "./ProductCard.styles.js";

const ProductCard = memo(function ProductCard({
  id,
  image,
  category,
  name,
  price,
}) {
  const { addToCart } = useContext(CartContext);

  const handleBuyClick = () => {
    addToCart({ id, image, category, name, price });
    toast.success("Producto agregado al carrito 🛒", {
      duration: 3000,
      position: "end-center",
    });
  };

  return (
    <Card>
      <ProductImage src={image} alt={name} loading="lazy" />
      <ProductInfo>
        <ProductCategory>{category}</ProductCategory>
        <ProductName>{name}</ProductName>
        <ProductPrice>${price.toFixed(2)}</ProductPrice>
        <ButtonContainer>
          <Button onClick={handleBuyClick} className="buy">
            Comprar
          </Button>
          <StyledLink to={`/shop/product/${id}`}>
            <Button className="view">Ver</Button>
          </StyledLink>
        </ButtonContainer>
      </ProductInfo>
    </Card>
  );
});

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductCard;
