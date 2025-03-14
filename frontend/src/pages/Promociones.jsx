import { useState, useEffect } from "react";
import { getPromotionProducts } from "../services/Api";
import ItemList from "../UI/ItemList/ItemList";
import ProductCard from "../components/Products/ProductCard/ProductCard";
import Loader from "../UI/Loader";

const Promotions = () => {
  const [promotions, setPromotions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPromotions = async () => {
    try {
      const promoProducts = await getPromotionProducts();
      if (Array.isArray(promoProducts)) {
        setPromotions(promoProducts);
      } else {
        throw new Error("Datos de promociones incorrectos");
      }
    } catch (error) {
      console.error("Error al obtener promociones:", error);
      setError(
        "No pudimos cargar las promociones. Por favor, inténtalo más tarde."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPromotions();
  }, []);

  const handleRetry = () => {
    setLoading(true);
    setError(null);
    fetchPromotions();
  };

  return (
    <section>
      {loading ? (
        <Loader />
      ) : error ? (
        <div style={{ color: "red", textAlign: "center" }}>
          <p>{error}</p>
          <button onClick={handleRetry}>Intentar nuevamente</button>
        </div>
      ) : (
        <ItemList
          items={promotions}
          title="🔥 Promociones Especiales 🔥"
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
          showLoadMore={false} // Si hay paginación, podrías cambiar esto a true
        />
      )}
    </section>
  );
};

export default Promotions;
