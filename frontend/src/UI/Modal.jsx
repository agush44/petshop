import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

export default function Modal({ closeModal, formData, onSubmit, fields }) {
  const [formState, setFormState] = useState(formData || {});

  useEffect(() => {
    setFormState(formData || {});
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await onSubmit(formState);
      closeModal();
    } catch (error) {
      console.error("Error al guardar:", error);
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
        <h2 className="text-xl font-bold mb-4">Editar producto</h2>
        {fields.map(({ label, name, type, placeholder, options }) => (
          <div className="mb-2" key={name}>
            <label
              htmlFor={name}
              className="block text-sm font-medium text-gray-700"
            >
              {label}
            </label>
            {options ? (
              <select
                id={name}
                name={name}
                value={formState[name] ?? ""}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              >
                <option value="">
                  {placeholder || "Seleccione una opción"}
                </option>
                {options.map((option, idx) => (
                  <option key={idx} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              <input
                id={name}
                name={name}
                type={type || "text"}
                placeholder={placeholder}
                value={formState[name] ?? ""}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            )}
          </div>
        ))}
        <div className="flex justify-end gap-2 mt-4">
          <button
            onClick={closeModal}
            className="bg-gray-300 px-4 py-2 rounded cursor-pointer"
          >
            Cancelar
          </button>
          <button
            type="submit"
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

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  formData: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.string,
      placeholder: PropTypes.string,
    })
  ).isRequired,
};
