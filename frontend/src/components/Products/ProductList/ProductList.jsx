import PropTypes from "prop-types";
import useFilteredProducts from "../../Hooks/useFilteredProducts.jsx";
import ItemList from "../../../UI/ItemList/ItemList.jsx";
import ProductCard from "../ProductCard/ProductCard";

const ProductList = ({ categoryFilter, animalFilter }) => {
  const { filteredProducts, visibleCount, handleLoadMore, loading } =
    useFilteredProducts(categoryFilter, animalFilter);

  if (loading) return <p>Cargando productos...</p>;

  const renderProduct = (product) => (
    <ProductCard
      key={product._id}
      id={product._id}
      image={product.image}
      category={product.category}
      name={product.name}
      price={product.price}
    />
  );

  return (
    <ItemList
      items={filteredProducts.slice(0, visibleCount)}
      title="Nuestros productos"
      renderItem={renderProduct}
      loadMore={handleLoadMore}
      showLoadMore={visibleCount < filteredProducts.length}
    />
  );
};

ProductList.propTypes = {
  categoryFilter: PropTypes.string,
  animalFilter: PropTypes.string,
};

export default ProductList;
