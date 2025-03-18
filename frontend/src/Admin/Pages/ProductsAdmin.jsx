import { useState, useEffect } from "react";
import { FiEdit, FiTrash, FiPlus } from "react-icons/fi";
import { fetchProducts } from "../../services/Api";
import PropTypes from "prop-types";

const ProductsAdmin = ({ openModal }) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProductos(data);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    };
    loadProducts();
  }, []);

  console.log(productos);

  const openProductModal = (producto = null) => {
    openModal(producto);
  };

  return (
    <div className="p-3 sm:p-4 md:p-6 w-full">
      {/* Encabezado Responsivo */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2 sm:gap-4">
        <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900">
          Productos
        </h2>
        <button
          onClick={() => openProductModal()}
          className="bg-[#324fc7] text-white px-2 py-1 sm:px-4 sm:py-2 md:px-6 md:py-3 text-xs sm:text-sm md:text-base rounded-md flex items-center justify-center hover:opacity-80 cursor-pointer transition-all duration-200"
        >
          <FiPlus className="mr-1 sm:mr-2" /> Agregar Producto
        </button>
      </div>

      {/* Tabla Responsiva */}
      <div className="bg-white p-3 sm:p-4 md:p-5 rounded-lg shadow-lg overflow-x-auto">
        <table className="w-full min-w-[320px] border-separate border-spacing-0 text-[10px] sm:text-xs md:text-sm lg:text-base">
          <thead>
            <tr className="bg-indigo-100 text-gray-700">
              <th className="p-1 sm:p-2 md:p-3 text-left font-medium">
                Nombre
              </th>
              <th className="p-1 sm:p-2 md:p-3 text-left font-medium">
                Precio
              </th>
              <th className="p-1 sm:p-2 md:p-3 text-left font-medium">Stock</th>
              <th className="p-1 sm:p-2 md:p-3 text-left font-medium">
                Categoría
              </th>
              <th className="p-1 sm:p-2 md:p-3 text-center font-medium">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {productos.map((producto) => (
              <tr
                key={producto._id}
                className="border-t hover:bg-gray-50 transition-colors"
              >
                <td className="p-1 sm:p-2 md:p-3 text-gray-800">
                  {producto.name}
                </td>
                <td className="p-1 sm:p-2 md:p-3 text-gray-600">
                  ${producto.price}
                </td>
                <td className="p-1 sm:p-2 md:p-3 text-gray-600">
                  {producto.stock}
                </td>
                <td className="p-1 sm:p-2 md:p-3 text-gray-600">
                  {producto.category}
                </td>
                <td className="p-1 sm:p-2 md:p-3 text-center">
                  <button
                    onClick={() => openProductModal(producto)}
                    className="text-blue-600 hover:text-blue-800 focus:outline-none transition-colors duration-150 cursor-pointer"
                  >
                    <FiEdit size={16} />
                  </button>
                  <button className="text-red-600 hover:text-red-800 ml-1 sm:ml-2 md:ml-4 focus:outline-none transition-colors duration-150 cursor-pointer">
                    <FiTrash size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

ProductsAdmin.propTypes = {
  openModal: PropTypes.func.isRequired,
};

export default ProductsAdmin;
