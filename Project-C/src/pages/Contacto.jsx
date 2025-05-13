import React, { useState } from "react";

const Contacto = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log("Formulario enviado:", formData);
    // Aquí puedes limpiar el formulario si es necesario
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="container mx-auto mt-40 flex">
      <div className="w-full md:w-3/5 lg:w-1/2 mr-9">
        <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
          <h1 className="text-center text-2xl font-bold mb-5">Contacto</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <label htmlFor="name" className="block mb-2">
                Nombre:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">
                Correo electrónico:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block mb-2">
                Mensaje:
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-primary text-white font-bold rounded-md hover:bg-primary-dark focus:outline-none focus:bg-primary-dark"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
      <div className="w-full md:w-2/5 lg:w-1/2">
        <div className="p-8 bg-gray-100 rounded-lg shadow-lg border border-gray-300">
          <iframe
            title="Ubicación"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.174783001766!2d-70.6639716!3d-33.4447526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5aa2d1e8319%3A0xbfdf24d885dfba78!2sJos%C3%A9%20Toribio%20Medina%2C%20Santiago%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses-419!2scl!4v1713807610301!5m2!1ses-419!2scl"
            width="100%"
            height="400"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
