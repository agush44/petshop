import PropTypes from "prop-types";
import { ItemListContainer, Title, MoreButton } from "./ItemList.styles";

const ItemList = ({ items, title, renderItem, loadMore, showLoadMore }) => {
  return (
    <>
      {title && <Title>{title}</Title>}
      <ItemListContainer>
        {items.length > 0 ? (
          items.map((item, index) => renderItem(item, index))
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
