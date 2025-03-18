import Sidebar from "../Components/Sidebar/Sidebar";
import ModalProduct from "../Components/ModalProduct";
import { useState } from "react";
import ProductsAdmin from "./ProductsAdmin";

export default function Dashboard() {
  const [productoEdit, setProductoEdit] = useState(null);
  const openModal = (producto = null) => {
    setProductoEdit((prev) => (prev ? null : producto));
  };

  return (
    <div className="flex bg-indigo-50">
      <Sidebar openModal={openModal} />
      <div className="h-[200vh] w-full">
        <ProductsAdmin openModal={openModal} />

        {productoEdit && (
          <ModalProduct
            closeModal={() => openModal()}
            producto={productoEdit}
          />
        )}
      </div>
    </div>
  );
}
