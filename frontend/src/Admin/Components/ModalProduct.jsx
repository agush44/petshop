import { useState } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { createProduct, updateProduct } from "../../services/Api";

export default function ModalProducto({ closeModal, producto }) {
  const [nombre, setNombre] = useState(producto?.name || "");
  const [descripcion, setDescripcion] = useState(producto?.description || "");
  const [precio, setPrecio] = useState(producto?.price || "");
  const [stock, setStock] = useState(producto?.stock || "");
  const [categoria, setCategoria] = useState(producto?.category || "");
  const [imagen, setImagen] = useState(producto?.image || "");
  const [animalType, setAnimalType] = useState(producto?.animalType || "");
  const [discount, setDiscount] = useState(producto?.discount || "");
  const [discountExpiresAt, setDiscountExpiresAt] = useState(
    producto?.discountExpiresAt || ""
  );
  const token = "tu_token_aqui";

  const handleSubmit = async () => {
    try {
      const productData = {
        nombre,
        descripcion,
        precio,
        stock,
        categoria,
        imagen,
        animalType,
        discount,
        discountExpiresAt,
      };
      if (producto) {
        await updateProduct(producto._id, productData, token);
        alert("Producto actualizado");
      } else {
        await createProduct(productData, token);
      }

      closeModal();
    } catch (error) {
      console.error("Error al guardar producto:", error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center"
    >
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">
          {producto ? "Editar Producto" : "Agregar Producto"}
        </h2>

        <div className="mb-2">
          <label
            htmlFor="nombre"
            className="block text-sm font-medium text-gray-700"
          >
            Nombre
          </label>
          <input
            id="nombre"
            className="w-full p-2 border rounded"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="mb-2">
          <label
            htmlFor="descripcion"
            className="block text-sm font-medium text-gray-700"
          >
            Descripción
          </label>
          <textarea
            id="descripcion"
            className="w-full p-2 border rounded"
            placeholder="Descripción"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </div>

        <div className="mb-2">
          <label
            htmlFor="precio"
            className="block text-sm font-medium text-gray-700"
          >
            Precio
          </label>
          <input
            id="precio"
            className="w-full p-2 border rounded"
            placeholder="Precio"
            type="number"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
          />
        </div>

        <div className="mb-2">
          <label
            htmlFor="stock"
            className="block text-sm font-medium text-gray-700"
          >
            Stock
          </label>
          <input
            id="stock"
            className="w-full p-2 border rounded"
            placeholder="Stock"
            type="number"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />
        </div>

        <div className="mb-2">
          <label
            htmlFor="categoria"
            className="block text-sm font-medium text-gray-700"
          >
            Categoría
          </label>
          <input
            id="categoria"
            className="w-full p-2 border rounded"
            placeholder="Categoría"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          />
        </div>

        <div className="mb-2">
          <label
            htmlFor="imagen"
            className="block text-sm font-medium text-gray-700"
          >
            Imagen (URL)
          </label>
          <input
            id="imagen"
            className="w-full p-2 border rounded"
            placeholder="Imagen (URL)"
            value={imagen}
            onChange={(e) => setImagen(e.target.value)}
          />
        </div>

        <div className="mb-2">
          <label
            htmlFor="animalType"
            className="block text-sm font-medium text-gray-700"
          >
            Tipo de Animal
          </label>
          <input
            id="animalType"
            className="w-full p-2 border rounded"
            placeholder="Tipo de Animal"
            value={animalType}
            onChange={(e) => setAnimalType(e.target.value)}
          />
        </div>

        <div className="mb-2">
          <label
            htmlFor="discount"
            className="block text-sm font-medium text-gray-700"
          >
            Descuento (%)
          </label>
          <input
            id="discount"
            className="w-full p-2 border rounded"
            placeholder="Descuento (%)"
            type="number"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
          />
        </div>

        <div className="mb-2">
          <label
            htmlFor="discountExpiresAt"
            className="block text-sm font-medium text-gray-700"
          >
            Expiración del Descuento
          </label>
          <input
            id="discountExpiresAt"
            className="w-full p-2 border rounded"
            placeholder="Expiración del Descuento"
            type="date"
            value={discountExpiresAt}
            onChange={(e) => setDiscountExpiresAt(e.target.value)}
          />
        </div>

        <div className="flex justify-end gap-2 mt-4">
          <button
            onClick={closeModal}
            className="bg-gray-300 px-4 py-2 rounded cursor-pointer"
          >
            Cancelar
          </button>
          <button
            onClick={handleSubmit}
            className="bg-indigo-600 text-white px-4 py-2 rounded cursor-pointer"
          >
            Guardar
          </button>
        </div>
      </div>
    </motion.div>
  );
}

ModalProducto.propTypes = {
  closeModal: PropTypes.func.isRequired,
  producto: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    stock: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    category: PropTypes.string,
    image: PropTypes.string,
    animalType: PropTypes.string,
    discount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    discountExpiresAt: PropTypes.string,
    _id: PropTypes.string,
  }),
};
