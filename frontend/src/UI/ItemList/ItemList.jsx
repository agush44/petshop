import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { ItemListContainer, Title, MoreButton } from "./ItemList.styles";
import { motion } from "framer-motion";

const ItemList = ({ items, title, renderItem, loadMore, showLoadMore }) => {
  const [visibleIndexes, setVisibleIndexes] = useState([]);
  const itemRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.dataset.index;
            setVisibleIndexes((prev) => [...prev, parseInt(index)]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentRefs = itemRefs.current;
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
              ref={(el) => (itemRefs.current[index] = el)}
              data-index={index}
              initial={{ opacity: 0, y: 10 }}
              animate={
                visibleIndexes.includes(index) ? { opacity: 1, y: 0 } : {}
              }
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
      {showLoadMore && (
        <MoreButton aria-label="Ver más" onClick={loadMore}>
          Ver más
        </MoreButton>
      )}
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
