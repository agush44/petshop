import { useContext } from "react";
import PropTypes from "prop-types";
import Modal from "../../UI/Modal";
import toast from "react-hot-toast";
import { ProductContext } from "../../context/ShopContext";
import { productFields } from "../../data/fieldsConfig";
import { formatProductData } from "../../utils/formUtils";
import { productSchema } from "../../utils/productValidation";

export default function ModalAddProduct({ closeModal, producto, title }) {
  const { addProduct, token } = useContext(ProductContext);

  const handleSubmit = async (formData) => {
    try {
      const formattedData = formatProductData(formData);
      const { error } = productSchema.validate(formattedData);

      if (error) {
        toast.error(`Error de validación: ${error.details[0].message}`);
        return;
      }

      await addProduct(formattedData, token);
      toast.success("Producto creado exitosamente");

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
      title={title}
    />
  );
}

ModalAddProduct.propTypes = {
  title: PropTypes.string.isRequired,
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
};
