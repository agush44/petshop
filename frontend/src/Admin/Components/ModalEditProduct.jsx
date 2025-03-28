import { useContext } from "react";
import PropTypes from "prop-types";
import Modal from "../../UI/Modal";
import toast from "react-hot-toast";
import { ProductContext } from "../../context/ShopContext";
import { productFields } from "../../data/fieldsConfig";
import { formatProductData } from "../../utils/formUtils";

export default function ModalProduct({
  closeModal,
  producto,
  title,
  onUpdate,
}) {
  const { editProduct, token } = useContext(ProductContext);

  const handleSubmit = async (formData) => {
    try {
      const formattedData = formatProductData(formData);

      delete formattedData._id;
      delete formattedData.createdAt;
      delete formattedData.updatedAt;

      if (producto?._id) {
        const updatedProduct = await editProduct(
          producto._id,
          formattedData,
          token
        );

        toast.success("Producto actualizado exitosamente");

        if (onUpdate) {
          onUpdate(updatedProduct);
        }
      }
      closeModal();
    } catch (error) {
      console.error("Error al guardar el producto:", error);
      toast.error("Error al guardar el producto");
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
ModalProduct.propTypes = {
  title: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
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
