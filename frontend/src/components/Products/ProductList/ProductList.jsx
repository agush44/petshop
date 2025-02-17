import { useContext } from "react";
import ProductCard from "../ProductCard/ProductCard.jsx";
import ProductContext from "../../../context/ProductContext.js";
import { ProductListContainer } from "./ProductList.styles.js";

const ProductList = () => {
  const { products, loading } = useContext(ProductContext);

  if (loading) return <p>Cargando productos...</p>;

  console.log(products);

  return (
    <ProductListContainer>
      {products.map((product) => (
        <ProductCard
          key={product._id}
          image={product.image}
          category={product.category}
          name={product.name}
          price={product.price}
        />
      ))}
    </ProductListContainer>
  );
};

export default ProductList;
