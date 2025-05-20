import PropTypes from "prop-types";
import useFilteredProducts from "../components/Hooks/useFilteredProducts.jsx";
import ProductCard from "../components/Products/ProductCard/ProductCard.jsx";
import ItemList from "../UI/ItemList/ItemList.jsx";
import Loader from "../UI/Loader.jsx";

const Alimentos = () => {
  const categoryFilter = "alimentos";
  const { filteredProducts, visibleCount, handleLoadMore, loading } =
    useFilteredProducts(categoryFilter);

  if (loading) return <Loader />;

  if (filteredProducts.length === 0) {
    return <p>No se encontraron productos en la categoría Alimentos.</p>;
  }

  return (
    <ItemList
      items={filteredProducts.slice(0, visibleCount)}
      title="Alimento Balanceado"
      renderItem={(product) => (
        <ProductCard
          key={product._id}
          _id={product._id}
          image={product.image}
          category={product.category}
          name={product.name}
          price={product.price}
          discount={product.discount}
          discountExpiresAt={product.discountExpiresAt}
        />
      )}
      showLoadMore={visibleCount < filteredProducts.length}
      loadMore={handleLoadMore}
    />
  );
};

Alimentos.propTypes = {
  categoryFilter: PropTypes.string,
};

export default Alimentos;
