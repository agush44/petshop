import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { ItemListContainer, Title, MoreButton } from "./ItemList.styles";
import { motion } from "framer-motion";

const ItemList = ({ items, title, renderItem, loadMore, showLoadMore }) => {
  const [visibleIndexes, setVisibleIndexes] = useState([]);
  const itemRefs = useRef([]); // Referencias individuales para cada ítem

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.dataset.index; // Obtener índice desde data-index
            setVisibleIndexes((prev) => [...prev, parseInt(index)]);
          }
        });
      },
      { threshold: 0.1 } // Ajustar el umbral para activar las animaciones
    );

    const currentRefs = itemRefs.current; // Copy the ref to a local variable
    currentRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <>
      {title && <Title>{title}</Title>}
      <ItemListContainer>
        {items.length > 0 ? (
          items.map((item, index) => (
            <motion.div
              key={index}
              ref={(el) => (itemRefs.current[index] = el)} // Referenciar ítems
              data-index={index} // Guardar el índice del ítem
              initial={{ opacity: 0, y: 10 }}
              animate={
                visibleIndexes.includes(index) ? { opacity: 1, y: 0 } : {}
              } // Activar animación solo si está visible
              transition={{ delay: index * 0.1, duration: 0.3 }}
              style={{ display: "flex" }}
            >
              {renderItem(item, index)}
            </motion.div>
          ))
        ) : (
          <p>No se encontraron elementos.</p>
        )}
      </ItemListContainer>
      {showLoadMore && <MoreButton onClick={loadMore}>Ver más</MoreButton>}
    </>
  );
};

ItemList.propTypes = {
  items: PropTypes.array.isRequired,
  title: PropTypes.string,
  renderItem: PropTypes.func.isRequired,
  loadMore: PropTypes.func,
  showLoadMore: PropTypes.bool,
};

export default ItemList;
