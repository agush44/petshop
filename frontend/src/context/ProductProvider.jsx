import { useState, useEffect } from "react";
import { ProductContext } from "./ShopContext.js";
import { fetchProducts } from "../services/Api.js";
import PropTypes from "prop-types";

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const loadProducts = async () => {
      if (products.length > 0) return;

      try {
        const data = await fetchProducts();

        const formattedProducts = data.map((product) => ({
          ...product,
          image: product.image
            ? product.image.replace(/\.(jpg|png)$/i, ".webp")
            : "/images/placeholder.png",
        }));

        setProducts(formattedProducts);
      } catch (error) {
        console.error("Error al obtener productos", error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, [products.length]);

  return (
    <ProductContext.Provider
      value={{ products, loading, searchQuery, setSearchQuery }}
    >
      {children}
    </ProductContext.Provider>
  );
};

ProductProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProductProvider;
