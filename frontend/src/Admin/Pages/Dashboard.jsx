import Sidebar from "../Components/Sidebar/Sidebar";
import ModalEditProduct from "../Components/ModalEditProduct";
import ModalAddProduct from "../Components/ModalAddProduct"; // Agregar este import
import { useContext, useState } from "react";
import ProductsAdmin from "./ProductsAdmin";
import { ProductContext } from "../../context/ShopContext";

export default function Dashboard() {
  const { addProduct } = useContext(ProductContext);
  const [productoEdit, setProductoEdit] = useState(null);
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFndXNoMSIsImlhdCI6MTc0MjM5NjA5NCwiZXhwIjoxNzQyNDE0MDk0fQ.TSZ3gxWeOfSYCPbK-Bvf4J6im0wMUooo-CTDQPYcF1Q";

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
          token={token}
        />

        {productoEdit && (
          <ModalEditProduct
            title="Editar producto"
            closeModal={() => openEditModal(null)}
            producto={productoEdit}
            token={token}
          />
        )}

        {isAddModalOpen && (
          <ModalAddProduct
            title="Agregar producto"
            closeModal={() => setAddModalOpen(false)}
            onSubmit={handleAddProduct}
            token={token}
          />
        )}
      </div>
    </div>
  );
}
