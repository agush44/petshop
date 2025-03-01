import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useContext } from "react";
import { ProductContext } from "../../../context/ShopContext";
import {
  ModalOverlay,
  ModalContainer,
  SearchInput,
  CloseButton,
  SearchResults,
  SearchResultItem,
} from "./SearchModal.styles";

const SearchModal = ({ isOpen, closeModal }) => {
  const { searchQuery, setSearchQuery, products } = useContext(ProductContext);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (searchQuery.trim() !== "") {
      setFilteredProducts(
        products.filter((product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    } else {
      setFilteredProducts([]);
    }
  }, [searchQuery, products]);

  return (
    <>
      {isOpen && (
        <ModalOverlay onClick={closeModal}>
          <ModalContainer onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={closeModal}>X</CloseButton>
            <SearchInput
              type="text"
              placeholder="Buscar productos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <SearchResults>
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <SearchResultItem key={product.id}>
                    {product.name}
                  </SearchResultItem>
                ))
              ) : (
                <p>No se encontraron productos</p>
              )}
            </SearchResults>
          </ModalContainer>
        </ModalOverlay>
      )}
    </>
  );
};
SearchModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default SearchModal;
