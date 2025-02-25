import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../../../context/ShopContext";
import { CartContext } from "../../../context/ShopContext";
import {
  TotalDetailContainer,
  DetailContainer,
  DetailImage,
  DetailInfo,
  DetailCategory,
  DetailName,
  DetailPrice,
  DetailDescription,
  PaymentShippingText,
  AddToCartButton,
  BackButton,
} from "./ProductDetail.styles";

const ProductDetail = () => {
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  const { productId } = useParams();
  const navigate = useNavigate();

  if (!products || products.length === 0) {
    return <h2>Cargando producto...</h2>;
  }

  const product =
    products && products.length > 0
      ? products.find((prod) => prod._id && prod._id.toString() === productId)
      : null;

  if (!product) {
    return <h2>Producto no encontrado</h2>;
  }

  return (
    <TotalDetailContainer>
      <DetailContainer>
        <DetailImage src={product.image} alt={product.name} />
        <DetailInfo>
          <DetailCategory>{product.category}</DetailCategory>
          <DetailName>{product.name}</DetailName>
          <DetailPrice>${product.price.toFixed(2)}</DetailPrice>
          <DetailDescription>{product.description}</DetailDescription>
          <PaymentShippingText>Envío gratis en Santa Fe</PaymentShippingText>

          <AddToCartButton onClick={() => addToCart(product)}>
            Agregar al carrito
          </AddToCartButton>

          <BackButton onClick={() => navigate(-1)}>Volver</BackButton>
        </DetailInfo>
      </DetailContainer>
    </TotalDetailContainer>
  );
};

export default ProductDetail;
