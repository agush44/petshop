import { useState, useMemo, useContext } from "react";
import { ProductContext } from "../../context/ShopContext";

const useFilteredProducts = (categoryFilter, animalFilter) => {
  const { products, loading } = useContext(ProductContext);
  const [visibleCount, setVisibleCount] = useState(8);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const categoryMatch = categoryFilter
        ? product.category === categoryFilter
        : true;
      const animalMatch = animalFilter
        ? product.animalType === animalFilter
        : true;
      return categoryMatch && animalMatch;
    });
  }, [products, categoryFilter, animalFilter]);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 8);
  };

  console.log("Productos antes del filtrado:", products);

  if (!products || products.length === 0) {
    console.error(
      "❌ No hay productos en el contexto. Verifica si la API está cargando datos."
    );
  } else {
    products.forEach((product) => {
      console.log(
        `✅ Producto: ${product.name}, animalType: ${product.animalType}`
      );
    });
  }

  return { filteredProducts, visibleCount, handleLoadMore, loading };
};

export default useFilteredProducts;
