import PropTypes from "prop-types";
import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import ProductContext from "../../../context/ProductContext";
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

          <AddToCartButton>Añadir al carrito</AddToCartButton>

          <BackButton onClick={() => navigate(-1)}>Volver</BackButton>
        </DetailInfo>
      </DetailContainer>
    </TotalDetailContainer>
  );
};

ProductDetail.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ProductDetail;
