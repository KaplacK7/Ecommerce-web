import React from "react";
import footerLogo from "../../assets/logo.png";
import Banner from "../../assets/website/foter.jpg";
import { Link } from "react-router-dom"; // Importa el componente Link de react-router-dom
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt } from "react-icons/fa";

// Estilos del banner
const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

// Enlaces para la sección "Mi cuenta"
const AccountLinks = [
  { title: "Ingresar", link: "/Ingresar-Cuenta" },
  { title: "Ver mis detalles", link: "/Ver-Detalles" },
  { title: "Dirección de Facturación", link: "/Direccion-Facturacion" },
  { title: "Dirección de Envío", link: "/Direccion-Envio" },
];

// Enlaces para la sección "Información"
const InfoLinks = [
  { title: "Contacto", link: "/Contacto" },
  { title: "Términos y Condiciones de Despacho", link: "/TerminosDespacho" }, // Cambia el nombre de la ruta
];

// Icono de correo electrónico en formato JSX
const correoIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 3.75H6.912a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859M12 3v8.25m0 0-3-3m3 3 3-3" />
  </svg>
);

const Footer = () => {
  return (
    <div style={BannerImg} className="text-white">
      <div className="container">
        <div data-aos="zoom-in" className="grid md:grid-cols-3 pb-44 pt-5">
          {/* Detalles de la empresa */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={footerLogo} alt="" className="max-w-[50px]" />
              Gran Marina
            </h1>
            <p>
              Empresa dedicada a la venta de repuestos de cajas de transmisión automática. Desde el año 1992 nos encontramos al servicio de nuestros clientes, despachamos a lo largo de todo Chile e importamos todos nuestros repuestos, lo que nos da la posibilidad de tener los precios más atractivos del mercado, buscando siempre una alta satisfacción en nuestros clientes.
            </p>
          </div>

          {/* Sección "Mi cuenta" */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Mi cuenta
                </h1>
                <ul className="flex flex-col gap-3">
                  {AccountLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                      key={link.title}
                    >
                      <a href={link.link}>{link.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Sección "Información" */}
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Información
                </h1>
                <ul className="flex flex-col gap-3">
                  {InfoLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                      key={link.title}
                    >
                      <Link to={link.link}>{link.title}</Link> {/* Usa el componente Link para la navegación */}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Sección de "Contactanos" */}
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Contactanos
                </h1>
                <div className="flex items-center gap-3">
                  {correoIcon}
                  <p className="text-gray-200">GranMarina1@hotmail.com</p>
                </div>
                <p className="text-gray-200">+56912345678</p>
                <p className="text-gray-200">Horario: Lunes a Viernes de 9:00 AM a 6:00 PM</p>
                <p className="text-gray-200">Ubicación: José Toribio Medina 7</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
