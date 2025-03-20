import fetchData, { API_URL } from "./api.js";

export const fetchProducts = async () => {
  return fetchData(`${API_URL}/api/products`);
};

export const getPromotionProducts = async () => {
  return fetchData(`${API_URL}/api/products/promotions`);
};

export const fetchProductById = async (id) => {
  return fetchData(`${API_URL}/api/products/${id}`);
};

export const createProduct = async (productData, token) => {
  return fetchData(`${API_URL}/api/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(productData),
  });
};

export const updateProduct = async (id, productData, token) => {
  return fetchData(`${API_URL}/api/products/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(productData),
  });
};

export const deleteProduct = async (id, token) => {
  return fetchData(`${API_URL}/api/products/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
