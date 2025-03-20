import { useState } from "react";
import PropTypes from "prop-types";
import { ModalContext } from "./ShopContext";

export const ModalProvider = ({ children }) => {
  const [productoEdit, setProductoEdit] = useState(null);
  const [isAddModalOpen, setAddModalOpen] = useState(false);

  const openEditModal = (producto = null) => setProductoEdit(producto);
  const closeEditModal = () => setProductoEdit(null);

  const openAddModal = () => setAddModalOpen(true);
  const closeAddModal = () => setAddModalOpen(false);

  return (
    <ModalContext.Provider
      value={{
        productoEdit,
        isAddModalOpen,
        openEditModal,
        closeEditModal,
        openAddModal,
        closeAddModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

ModalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
