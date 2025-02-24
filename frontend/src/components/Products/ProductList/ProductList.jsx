import { useContext, useState } from "react";
import PropTypes from "prop-types";
import { ProductContext } from "../../../context/ShopContext.js";
import ItemList from "../../../UI/ItemList/ItemList.jsx";
import ProductCard from "../ProductCard/ProductCard";

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
