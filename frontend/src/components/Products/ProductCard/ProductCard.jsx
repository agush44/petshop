import PropTypes from "prop-types";
import {
  Card,
  ProductImage,
  ProductInfo,
  ProductCategory,
  ProductName,
  ProductPrice,
  AddToCartButton,
} from "./ProductCard.styles.js";

const ProductCard = ({ image, category, name, price }) => {
  return (
    <Card>
      <ProductImage src={image} alt={name} />
      <ProductInfo>
        <ProductCategory>{category}</ProductCategory>
        <ProductName>{name}</ProductName>
        <ProductPrice>${price.toFixed(2)}</ProductPrice>
        <AddToCartButton>Agregar al carrito</AddToCartButton>
      </ProductInfo>
    </Card>
  );
};

ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductCard;
