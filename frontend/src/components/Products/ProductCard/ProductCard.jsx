import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  Card,
  ProductImage,
  ProductInfo,
  ProductCategory,
  ProductName,
  ProductPrice,
  AddToCartButton,
} from "./ProductCard.styles.js";

const ProductCard = ({ id, image, category, name, price }) => {
  return (
    <Card>
      <Link
        to={`/shop/product/${id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <ProductImage src={image} alt={name} loading="lazy" />
        <ProductInfo>
          <ProductCategory>{category}</ProductCategory>
          <ProductName>{name}</ProductName>
          <ProductPrice>${price.toFixed(2)}</ProductPrice>
          <AddToCartButton>Agregar al carrito</AddToCartButton>
        </ProductInfo>
      </Link>
    </Card>
  );
};

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductCard;
