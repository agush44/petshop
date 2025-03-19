import { useCallback } from "react";
import { createProduct, updateProduct, deleteProduct } from "../services/Api";
import PropTypes from "prop-types";
import { ProductContext } from "./ShopContext";

const BackProductProvider = ({ children }) => {
  const addProduct = useCallback(async (productData, token) => {
    try {
      // Filtrar valores vacíos
      const cleanedProductData = Object.fromEntries(
        Object.entries(productData).filter(([, value]) => value !== "")
      );

      // Asegurar que price y stock sean números
      cleanedProductData.price = Number(cleanedProductData.price);
      cleanedProductData.stock = Number(cleanedProductData.stock);
      cleanedProductData.discount = cleanedProductData.discount
        ? Number(cleanedProductData.discount)
        : 0;

      // 📅 Convertir `discountExpiresAt` a formato "yyyy-MM-dd"
      if (cleanedProductData.discountExpiresAt) {
        const dateObj = new Date(cleanedProductData.discountExpiresAt);
        cleanedProductData.discountExpiresAt = dateObj
          .toISOString()
          .split("T")[0]; // "2025-03-22"
      }

      console.log("Datos enviados a la API:", cleanedProductData);

      const newProduct = await createProduct(cleanedProductData, token);
      return newProduct;
    } catch (error) {
      console.error(
        "Error al crear el producto:",
        error.response?.data || error
      );
      throw error;
    }
  }, []);

  const editProduct = useCallback(async (id, productData, token) => {
    try {
      const updatedProduct = await updateProduct(id, productData, token);
      return updatedProduct;
    } catch (error) {
      console.error("Error al actualizar el producto:", error);
      throw error;
    }
  }, []);

  const removeProduct = useCallback(async (id, token) => {
    try {
      await deleteProduct(id, token);
    } catch (error) {
      console.error("Error al eliminar el producto:", error);
      throw error;
    }
  }, []);

  return (
    <ProductContext.Provider value={{ addProduct, editProduct, removeProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

BackProductProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BackProductProvider;
