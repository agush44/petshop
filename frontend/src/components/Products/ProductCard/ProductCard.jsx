import PropTypes from "prop-types";
import { memo, useContext } from "react";
import { CartContext } from "../../../context/ShopContext";
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
  DiscountedPrice,
  NewPrice,
  ExpiredPromotion,
  DiscountPercentage,
} from "./ProductCard.styles.js";

const ProductCard = memo(function ProductCard({
  _id,
  image,
  category,
  name,
  price,
  discount,
  discountExpiresAt,
}) {
  const { addToCart } = useContext(CartContext);

  const isDiscountValid =
    discount &&
    (!discountExpiresAt || new Date(discountExpiresAt) > new Date());

  const discountedPrice = isDiscountValid
    ? price * (1 - discount / 100)
    : price;

  return (
    <Card>
      <ProductImage src={image} alt={name} loading="lazy" />
      <ProductInfo>
        <ProductCategory>{category}</ProductCategory>
        <ProductName>{name}</ProductName>

        {isDiscountValid ? (
          <>
            <ProductPrice>
              <DiscountedPrice>${price.toFixed(2)}</DiscountedPrice>
              <NewPrice>${discountedPrice.toFixed(2)}</NewPrice>
            </ProductPrice>
            <DiscountPercentage>{discount}% OFF 🔥</DiscountPercentage>
          </>
        ) : (
          <ProductPrice>${price.toFixed(2)}</ProductPrice>
        )}

        {/* Mensaje si la promoción expiró */}
        {discountExpiresAt && new Date(discountExpiresAt) < new Date() && (
          <ExpiredPromotion>¡La promoción ha expirado!</ExpiredPromotion>
        )}

        <ButtonContainer>
          <Button
            onClick={() =>
              addToCart({
                _id,
                image,
                category,
                name,
                price,
                discount,
                finalPrice: discountedPrice,
              })
            }
            className="buy"
          >
            Comprar
          </Button>
          <StyledLink to={`/shop/product/${_id}`}>
            <Button className="view">Ver</Button>
          </StyledLink>
        </ButtonContainer>
      </ProductInfo>
    </Card>
  );
});

ProductCard.propTypes = {
  _id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  discount: PropTypes.number,
  discountExpiresAt: PropTypes.string,
};

export default ProductCard;
