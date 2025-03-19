import fetchData, { API_URL } from "./api";
import toast from "react-hot-toast";

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

export const logoutUser = (navigate) => {
  toast(
    (t) => (
      <div>
        <p>¿Estás seguro de que quieres cerrar sesión?</p>
        <div className="flex justify-end gap-2 mt-2">
          <button
            className="bg-gray-300 px-3 py-1 rounded"
            onClick={() => {
              toast.dismiss(t.id); // Cierra el toast
            }}
          >
            Cancelar
          </button>
          {/* Botón para confirmar */}
          <button
            className="bg-red-500 text-white px-3 py-1 rounded"
            onClick={() => {
              localStorage.removeItem("token"); // Eliminar el token
              toast.dismiss(t.id); // Cierra el toast
              toast.success("Sesión cerrada correctamente"); // Mensaje de éxito
              navigate("/admin/login"); // Redirige suavemente al login
            }}
          >
            Cerrar Sesión
          </button>
        </div>
      </div>
    ),
    { duration: Infinity } // Mantener el toast visible hasta que el usuario interactúe
  );
};
