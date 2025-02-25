import { useState, useEffect, useContext } from "react";
import { ProductContext } from "../../context/ShopContext";

const useFilteredProducts = (categoryFilter, animalFilter) => {
  const { products, loading } = useContext(ProductContext);
  const [visibleCount, setVisibleCount] = useState(8);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const filtered = products.filter((product) => {
      const categoryMatch = categoryFilter
        ? product.category === categoryFilter
        : true;
      const animalMatch = animalFilter
        ? product.animalType === animalFilter
        : true;
      return categoryMatch && animalMatch;
    });

    setFilteredProducts(filtered);
  }, [products, categoryFilter, animalFilter]);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 8);
  };

  return { filteredProducts, visibleCount, handleLoadMore, loading };
};

export default useFilteredProducts;
