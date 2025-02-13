const API_URL = import.meta.env.VITE_BACKEND_URL;

// Obtener todos los productos
export const fetchProducts = async () => {
  const response = await fetch(`${API_URL}/api/products`);
  if (!response.ok) throw new Error("Error al obtener productos");
  return await response.json();
};

// Obtener producto por ID
export const fetchProductById = async (id) => {
  const response = await fetch(`${API_URL}/${id}`);
  if (!response.ok) throw new Error("Error al obtener el producto");
  return await response.json();
};

// Crear un producto (requiere autenticación)
export const createProduct = async (productData, token) => {
  const response = await fetch(`${API_URL}/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(productData),
  });
  if (!response.ok) throw new Error("Error al crear el producto");
  return await response.json();
};

// Actualizar un producto
export const updateProduct = async (id, productData, token) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(productData),
  });
  if (!response.ok) throw new Error("Error al actualizar el producto");
  return await response.json();
};

// Eliminar un producto
export const deleteProduct = async (id, token) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) throw new Error("Error al eliminar el producto");
  return await response.json();
};
