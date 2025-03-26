import React, { useState } from 'react';

const Registro = ({ registerUser }) => {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
  });
  const [registroExitoso, setRegistroExitoso] = useState(false);
  const [error, setError] = useState(''); // Para manejar el error de la API

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Llama a la función registerUser pasada como prop y maneja el éxito y error
    try {
      await registerUser(formData.email, formData.username, formData.password, formData.confirmPassword);
      setRegistroExitoso(true);
      setError(''); // Resetea cualquier error si el registro fue exitoso
    } catch (error) {
      if (error.response) {
        setError(error.response.data.detail || "Error desconocido al registrar el usuario.");
      } else {
        setError("Error desconocido.");
      }
    }
  };

  return (
    <div className="max-w-md mx-auto border border-blue-500 rounded p-4 mt-40">
      <h2 className="text-xl mb-4">Registro de Usuario</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="border border-gray-400 rounded w-full py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Nombre de usuario:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            className="border border-gray-400 rounded w-full py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Contraseña:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="border border-gray-400 rounded w-full py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2">Confirmar contraseña:</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            className="border border-gray-400 rounded w-full py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Mostrar mensaje de error si ocurre un problema */}
        {error && (
          <p className="text-red-600">{error}</p>
        )}

        {/* Muestra el mensaje de registro exitoso si registroExitoso es true */}
        {registroExitoso && (
          <p className="text-green-600">¡Felicitaciones! Te has registrado exitosamente.</p>
        )}

        <div className="flex justify-center">
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">Regístrate</button>
        </div>
      </form>
    </div>
  );
};

export default Registro;
