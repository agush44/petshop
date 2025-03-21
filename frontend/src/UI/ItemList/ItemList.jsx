import PropTypes from "prop-types";
import { ItemListContainer, Title, MoreButton } from "./ItemList.styles";
import { motion } from "framer-motion";

const ItemList = ({ items, title, renderItem, loadMore, showLoadMore }) => {
  return (
    <>
      {title && <Title>{title}</Title>}
      <ItemListContainer>
        {items.length > 0 ? (
          items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }} // Pequeño desliz hacia abajo
              animate={{ opacity: 1, y: 0 }} // Aparece suavemente
              transition={{ delay: index * 0.1, duration: 0.3 }} // Espaciado por index
              style={{ display: "flex" }} // Mantener estilos de flexbox
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
