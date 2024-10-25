import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./style/Auth.css"

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const endpoint = isRegistering ? "/api/register/" : "/api/login/";
      const response = await axios.post(endpoint, { email, password });
      localStorage.setItem("token", response.data.token);
      navigate("/profile");
    } catch (error) {
      console.error("Error during authentication:", error);
    }
  };

  return (
    <div className="container mx-auto flex flex-col items-center justify-center min-h-screen p-4">
      <h2 className="text-2xl font-bold mb-6">
        {isRegistering ? "Registro" : "Acceso"}
      </h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full max-w-md space-y-4"
      >
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="p-2 border border-gray-300 rounded-md w-full"
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="p-2 border border-gray-300 rounded-md w-full"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 w-full"
        >
          {isRegistering ? "Registrarse" : "Acceso"}
        </button>
      </form>
      <button
        onClick={() => setIsRegistering(!isRegistering)}
        className="mt-4 text-blue-500 hover:underline"
      >
        {isRegistering
          ? "¿Ya tienes una cuenta? Inicia sesión"
          : "¿Necesitas una cuenta? Regístrate"}
      </button>
    </div>
  );
};

export default Auth;
