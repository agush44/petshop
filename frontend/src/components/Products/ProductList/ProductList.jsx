import { useContext, useState } from "react";
import PropTypes from "prop-types";
import ProductCard from "../ProductCard/ProductCard.jsx";
import ProductContext from "../../../context/ProductContext.js";
import {
  ProductListContainer,
  MoreButton,
  Title,
} from "./ProductList.styles.js";

const ProductList = ({ categoryFilter, animalFilter }) => {
  const { products, loading } = useContext(ProductContext);
  const [visibleCount, setVisibleCount] = useState(8);

  if (loading) return <p>Cargando productos...</p>;

  const filteredProducts = products.filter((product) => {
    const categoryMatch = categoryFilter
      ? product.category === categoryFilter
      : true;
    const animalMatch = animalFilter
      ? product.animalType === animalFilter
      : true;

    return categoryMatch && animalMatch;
  });

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 8);
  };

  return (
    <>
      <Title>Nuestros productos</Title>
      <ProductListContainer>
        {filteredProducts.length > 0 ? (
          filteredProducts
            .slice(0, visibleCount)
            .map((product) => (
              <ProductCard
                key={product._id}
                id={product._id}
                image={product.image}
                category={product.category}
                name={product.name}
                price={product.price}
              />
            ))
        ) : (
          <p>No se encontraron productos que coincidan con los filtros.</p>
        )}
      </ProductListContainer>
      {visibleCount < filteredProducts.length && (
        <MoreButton onClick={handleLoadMore}>Ver más productos</MoreButton>
      )}
    </>
  );
};
ProductList.propTypes = {
  categoryFilter: PropTypes.string,
  animalFilter: PropTypes.string,
};

export default ProductList;
