import PropTypes from "prop-types";
import { memo, useContext, useState } from "react";
import { CartContext } from "../../../context/ShopContext";
import { formatPrice } from "../../../utils/formatPrice.js";
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
  const [imgError, setImgError] = useState(false);

  const isDiscountValid =
    discount &&
    (!discountExpiresAt || new Date(discountExpiresAt) > new Date());

  const discountedPrice = isDiscountValid
    ? price * (1 - discount / 100)
    : price;

  const fallbackImage = "/images/placeholder.png";

  return (
    <Card>
      <picture>
        <source
          srcSet={image.replace(/\.(jpg|png)$/i, ".webp")}
          type="image/webp"
        />
        <ProductImage
          src={imgError ? fallbackImage : image}
          alt={name}
          loading="lazy"
          onError={() => setImgError(true)}
        />
      </picture>

      <ProductInfo>
        <ProductCategory>{category}</ProductCategory>
        <ProductName>{name}</ProductName>

        {isDiscountValid ? (
          <>
            <ProductPrice>
              <DiscountedPrice>{formatPrice(price)}</DiscountedPrice>
              <NewPrice>{formatPrice(discountedPrice)}</NewPrice>
            </ProductPrice>
            <DiscountPercentage>{discount}% OFF 🔥</DiscountPercentage>
          </>
        ) : (
          <ProductPrice>{formatPrice(price)}</ProductPrice>
        )}

        <ButtonContainer>
          <Button
            aria-label="Comprar producto"
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
            <Button aria-label="Ver producto" className="view">
              Ver
            </Button>
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
