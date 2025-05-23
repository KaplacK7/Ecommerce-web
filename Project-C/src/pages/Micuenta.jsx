import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Micuenta = ({ loginUser }) => {  // Recibiendo loginUser como prop
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Usamos loginUser pasándole el email y la contraseña
    loginUser(formData.email, formData.password);
  };

  return (
    <div className="max-w-screen-lg mx-auto flex justify-center mt-40">
      <div className="w-1/2 pr-8">
        <div className="relative">
          <div className="absolute inset-0 bg-blue-100 opacity-75 rounded-md"></div> {/* Cuadro detrás del formulario */}
          <div className="p-4 relative z-10">
            <h2 className="text-xl mb-4">Iniciar sesión</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block mb-2">E-mail:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border border-gray-400 rounded w-full py-2 px-3 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-6">
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
              <div className="flex justify-between items-center mb-4">
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">Iniciar sesión</button>
                <a href="#" className="text-blue-500">¿Olvidaste tu contraseña?</a>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="w-1/2 pl-8">
        <div className="relative">
          <div className="absolute inset-0 bg-blue-100 opacity-75 rounded-md"></div> {/* Cuadro detrás del texto "¿Eres nuevo en Gran Marina?" */}
          <div className="p-4 relative z-10">
            <h2 className="text-xl mb-4">¿Eres nuevo en Gran Marina?</h2>
            <p className="text-center mb-4">Al registrarse en nuestra tienda, agilizará el proceso de pago, podrá agregar varias direcciones de envío, ver y rastrear sus pedidos y más.</p>
            <Link to="/registro" className="text-blue-500">Regístrate</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Micuenta;
