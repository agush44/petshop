import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { StyledButton } from "../UI/Button.styles";
import { loginUser } from "../services/authApi";
import { toast } from "react-hot-toast";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Por favor, ingresa un correo y una contraseña.");
      return;
    }

    try {
      const response = await loginUser({ email, password });

      if (response.token) {
        navigate("/admin/dashboard");
      }
    } catch (error) {
      toast.error(error.message || "Credenciales incorrectas.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-5">Iniciar sesión</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">
              Correo electrónico*
            </label>
            <input
              type="email"
              className="w-full p-2 border rounded-lg mt-1"
              placeholder="Ingresa tu correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">
              Contraseña*
            </label>
            <input
              type="password"
              className="w-full p-2 border rounded-lg mt-1"
              placeholder="Ingresa tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <StyledButton type="submit" width="100%" aria-label="Iniciar sesión">
            INICIAR SESIÓN
          </StyledButton>
        </form>
        <p className="text-center text-gray-600">
          ¿No tienes una cuenta?{" "}
          <Link
            to="/admin/register"
            className="text-blue-900 hover:opacity-60 transition duration-300"
          >
            Regístrate
          </Link>
        </p>
      </div>
    </div>
  );
}
