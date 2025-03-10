const API_URL = import.meta.env.VITE_BACKEND_URL;

const fetchData = async (url, options = {}) => {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};

// Obtener todos los productos
export const fetchProducts = async () => {
  return fetchData(`${API_URL}/api/products`);
};

// Obtener productos con promoción
export const getPromotionProducts = async () => {
  return fetchData(`${API_URL}/api/products/promotions`);
};

// Obtener producto por ID
export const fetchProductById = async (id) => {
  return fetchData(`${API_URL}/api/products/${id}`);
};

// Crear un producto (requiere autenticación)
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

// Actualizar un producto
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

// Eliminar un producto
export const deleteProduct = async (id, token) => {
  return fetchData(`${API_URL}/api/products/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
