import { useContext } from "react";
import PropTypes from "prop-types";
import ProductCard from "../ProductCard/ProductCard.jsx";
import ProductContext from "../../../context/ProductContext.js";
import { ProductListContainer } from "./ProductList.styles.js";

const ProductList = ({ categoryFilter, animalFilter }) => {
  const { products, loading } = useContext(ProductContext);

  if (loading) return <p>Cargando productos...</p>;

  // Filtrar productos según los filtros de categoría y tipo de animal
  const filteredProducts = products.filter((product) => {
    const categoryMatch = categoryFilter
      ? product.category === categoryFilter
      : true;
    const animalMatch = animalFilter
      ? product.animalType === animalFilter
      : true;

    return categoryMatch && animalMatch;
  });

  return (
    <ProductListContainer>
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <ProductCard
            key={product._id}
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
  );
};
ProductList.propTypes = {
  categoryFilter: PropTypes.string,
  animalFilter: PropTypes.string,
};

export default ProductList;
