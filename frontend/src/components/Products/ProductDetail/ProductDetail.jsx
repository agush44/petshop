import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ProductContext, CartContext } from "../../../context/ShopContext";
import { FaTruck } from "react-icons/fa";
import {
  TotalDetailContainer,
  DetailContainer,
  DetailImage,
  DetailInfo,
  DetailCategory,
  DetailName,
  ProductPrice,
  DiscountedPrice,
  NewPrice,
  DiscountPercentage,
  DetailDescription,
  FeatureItem,
  PaymentShippingText,
  AddToCartButton,
  BackButton,
} from "./ProductDetail.styles";

const ProductDetail = () => {
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  const { productId } = useParams();
  const navigate = useNavigate();

  if (!products?.length) return <h2>Cargando producto...</h2>;

  const product = products.find((prod) => prod._id?.toString() === productId);

  if (!product) return <h2>Producto no encontrado</h2>;

  const isDiscountValid =
    product.discount &&
    (!product.discountExpiresAt ||
      new Date(product.discountExpiresAt) > new Date());

  const finalPrice = isDiscountValid
    ? product.price * (1 - product.discount / 100)
    : product.price;

  return (
    <TotalDetailContainer>
      <DetailContainer>
        <DetailImage src={product.image} alt={product.name} />
        <DetailInfo>
          <DetailCategory>{product.category}</DetailCategory>
          <DetailName>{product.name}</DetailName>

          {isDiscountValid ? (
            <>
              <ProductPrice>
                <DiscountedPrice>${product.price.toFixed(2)}</DiscountedPrice>
                <NewPrice>${finalPrice.toFixed(2)}</NewPrice>
              </ProductPrice>
              <DiscountPercentage>
                {product.discount}% OFF 🔥
              </DiscountPercentage>
            </>
          ) : (
            <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
          )}

          <DetailDescription>{product.description}</DetailDescription>

          <FeatureItem>
            <FaTruck size={20} />
            <PaymentShippingText>Envío gratis en Santa Fe</PaymentShippingText>
          </FeatureItem>

          <AddToCartButton
            onClick={() =>
              addToCart({
                ...product,
                finalPrice,
              })
            }
          >
            Agregar al carrito
          </AddToCartButton>
          <BackButton onClick={() => navigate(-1)}>Volver</BackButton>
        </DetailInfo>
      </DetailContainer>
    </TotalDetailContainer>
  );
};

export default ProductDetail;
