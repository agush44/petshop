import PropTypes from "prop-types";
import { useContext } from "react";
import { ProductContext } from "../../../context/ShopContext";
import ItemList from "../../../UI/ItemList/ItemList.jsx";
import ProductCard from "../ProductCard/ProductCard";

const ProductList = ({ categoryFilter, animalFilter }) => {
  const { products, loading, searchQuery } = useContext(ProductContext);

  if (loading) return <p>Cargando productos...</p>;

  const filteredProducts = products
    .filter(
      (product) =>
        (!categoryFilter || product.category === categoryFilter) &&
        (!animalFilter || product.animalType === animalFilter)
    )
    .filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <ItemList
      items={filteredProducts}
      title="Nuestros productos"
      renderItem={(product) => (
        <ProductCard
          key={product._id}
          id={Number(product._id)}
          image={product.image}
          category={product.category}
          name={product.name}
          price={product.price}
        />
      )}
      showLoadMore={false}
    />
  );
};

ProductList.propTypes = {
  categoryFilter: PropTypes.string,
  animalFilter: PropTypes.string,
};

export default ProductList;
