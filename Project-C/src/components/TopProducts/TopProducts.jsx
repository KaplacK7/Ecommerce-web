import React from "react";
import Img2 from "../../assets/shirt/p.png";
import Img3 from "../../assets/shirt/t.png";
import Img5 from "../../assets/shirt/q-removebg-preview.png";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom"; // Importa el componente Link de react-router-dom

const ProductsData = [
  {
    id: 3,
    img: Img3,
    title: "BANNER KIT",
    description:
      "Completo de Empaquetadura + Pack de Discos de Friccion",
    link: "/kits" // Añade el enlace aquí
  },
  {
    id: 4,
    img: Img2,
    title: "MASTER KIT",
    description:
      "Completo de Empaquetadura + Pack de Discos de Friccion + Pack de Discos Separados",
    link: "/kits" // Añade el enlace aquí
  },
  {
    id: 5,
    img: Img5,
    title: "SUPER KIT",
    description:
      "Completo de Empaquetadura + Pack de Discos de Friccion + Pack de Discos Separados + Filtro Aceite + Banda + Bujes + Golillas",
    link: "/kits" // Añade el enlace aquí
  }
];

const TopProducts = ({ handleOrderPopup }) => {
  return (
    <div className="container">
      {/* Header section */}
      <div className="text-left mb-30">
        <p data-aos="fade-up" className="text-center text-5x8 text-primary mx-auto">
          Aquí no solo podrás encontrar productos individuales, también podrás encontrar
        </p>
        <h1 data-aos="fade-up" className="text-center text-xl font-bold">
          KITS 
        </h1>
        <p data-aos="fade-up" className="text-center text-lg text-gray-400">
          Tenemos estos Kits para su Vehiculo: 
        </p>
      </div>
      {/* Body section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
        {ProductsData.map((data) => (
          <Link to={data.link} key={data.id}> {/* Envolvemos cada producto en un componente de enlace */}
            <div
              data-aos="zoom-in"
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-100 group max-w-[300px]" // Aquí se cambió la duración de la animación a 200 el shadow
            >
              {/* image section */}
              <div className="h-[200px] flex items-center justify-center">
                <img
                  src={data.img}
                  alt=""
                  className="max-w-[140px] max-h-[140px] block transform group-hover:scale-105 duration-300 drop-shadow-md"
                />
              </div>
              {/* details section */}
              <div className="p-4 text-center">
                {/* star rating */}
                <div className="w-full flex items-center justify-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <h1 className="text-xl font-bold">{data.title}</h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                  {data.description}
                </p>
                <button
                  className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                  onClick={handleOrderPopup}
                >
                  Comprar
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopProducts;
