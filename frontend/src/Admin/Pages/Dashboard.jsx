import Sidebar from "../Components/Sidebar/Sidebar";
import ModalEditProduct from "../Components/ModalEditProduct";
import ModalAddProduct from "../Components/ModalAddProduct";
import { useContext, useState } from "react";
import ProductsAdmin from "./ProductsAdmin";
import { ProductContext } from "../../context/ShopContext";

export default function Dashboard() {
  const { addProduct, token } = useContext(ProductContext);
  const [productoEdit, setProductoEdit] = useState(null);
  const [isAddModalOpen, setAddModalOpen] = useState(false);

  const openEditModal = (producto = null) => setProductoEdit(producto);

  const handleAddProduct = async (formData) => {
    try {
      await addProduct(formData, token);
      setAddModalOpen(false);
    } catch (error) {
      console.error("Error al agregar el producto:", error);
    }
  };

  return (
    <div className="flex bg-indigo-50">
      <Sidebar />
      <div className="h-[200vh] w-full">
        <ProductsAdmin
          openEditModal={openEditModal}
          setAddModalOpen={setAddModalOpen}
        />

        {productoEdit && (
          <ModalEditProduct
            title="Editar producto"
            closeModal={() => openEditModal(null)}
            producto={productoEdit}
          />
        )}

        {isAddModalOpen && (
          <ModalAddProduct
            title="Agregar producto"
            closeModal={() => setAddModalOpen(false)}
            onSubmit={handleAddProduct}
          />
        )}
      </div>
    </div>
  );
}
