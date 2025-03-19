import fetchData, { API_URL } from "./api";

export const registerUser = async (userData) => {
  return fetchData(`${API_URL}/api/users/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
};

export const loginUser = async (userData) => {
  try {
    const response = await fetch(`${API_URL}/api/users/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      if (response.status === 401) {
        throw new Error(errorData.message || "Correo o contraseña incorrectos");
      }
      throw new Error(errorData.message || "Error en el login");
    }

    const data = await response.json();

    if (data.token) {
      localStorage.setItem("token", data.token);
    }

    return data;
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    throw error;
  }
};

export const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  return !!token;
};

export const logoutUser = () => {
  localStorage.removeItem("token");
};
