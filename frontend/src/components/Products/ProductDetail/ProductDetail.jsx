import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../../../context/ShopContext";
import { FaTruck } from "react-icons/fa";
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
          <FeatureItem>
            <FaTruck size={20} />
            <PaymentShippingText>Envío gratis en Santa Fe</PaymentShippingText>
          </FeatureItem>
          <AddToCartButton
            onClick={() => addToCart({ ...product, id: String(product._id) })}
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
