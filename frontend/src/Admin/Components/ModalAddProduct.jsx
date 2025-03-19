import { useContext } from "react";
import PropTypes from "prop-types";
import Modal from "../../UI/Modal";
import toast from "react-hot-toast";
import { ProductContext } from "../../context/ShopContext";
import { productFields } from "../../data/fieldsConfig";
import { formatProductData } from "../../utils/formUtils";
import { productSchema } from "../../../../backend/src/validations/productValidation";

export default function ModalAddProduct({ closeModal, producto, token }) {
  const { addProduct } = useContext(ProductContext);

  const handleSubmit = async (formData) => {
    try {
      // Formatear los datos del formulario
      const formattedData = formatProductData(formData);

      // Validar los datos con Joi antes de enviarlos
      const { error } = productSchema.validate(formattedData);

      // Si hay un error de validación, mostrar el mensaje de error
      if (error) {
        toast.error(`Error de validación: ${error.details[0].message}`);
        return; // Detener la ejecución si los datos no son válidos
      }

      // Si la validación pasa, proceder a agregar el producto
      await addProduct(formattedData, token);
      toast.success("Producto creado exitosamente");

      // Cerrar el modal
      closeModal();
    } catch (error) {
      console.error("Error al crear el producto:", error);
      toast.error("Error al crear el producto");
    }
  };

  return (
    <Modal
      closeModal={closeModal}
      formData={producto}
      onSubmit={handleSubmit}
      fields={productFields}
    />
  );
}

ModalAddProduct.propTypes = {
  closeModal: PropTypes.func.isRequired,
  producto: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    stock: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    category: PropTypes.string,
    image: PropTypes.string,
    animalType: PropTypes.string,
    discount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    discountExpiresAt: PropTypes.string,
  }),
  token: PropTypes.string.isRequired,
};
