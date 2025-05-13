import React from "react";
import Img1 from "../assets/shirt/enfriador.png";
import Img2 from "../assets/shirt/bomba.png";
import Img3 from "../assets/shirt/aceite.png";

const OfertasData = [
  {
    id: 1,
    img: Img1,
    title: "Enfriador de Aceite",
    description: "Enfriador de aceite para transmisión Volvo.",
    price: "$650.000",
    aosDelay: "200",
  },
  {
    id: 2,
    img: Img2,
    title: "Bomba de Aceite General Motors",
    description: "Bomba de aceite para transmisión Volvo.",
    price: "$550.000",
    aosDelay: "400",
  },
  {
    id: 3,
    img: Img3,
    title: "Bomba de Aceite FALLONE",
    description: "Bomba de Aceite para transmisiones Volkswagen.",
    price: "$390.000",
    aosDelay: "600",
  },
];

const HardParts = () => {
  return (
    <div className="mt-24 mb-12">
      <div className="container relative">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto mt-6">
          <p data-aos="fade-up" className="text-4xl font-bold text-primary">
            HARD PARTS
          </p>
          <p data-aos="fade-up" className="text-2xl font-semibold text-gray-400">
            Aquí encontrarás los mejores productos al mejor precio
          </p>
        </div>

        {/* Filter section */}
        <div className="absolute top-0 right-0 z-10 bg-white p-4 shadow-lg rounded-md">
          <select className="border border-gray-300 rounded-md px-2 py-1">
            <option value="">Ordenar por Nombre A-Z</option>
            <option value="">Ordenar por Precio menor a mayor</option>
          </select>
        </div>

        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 justify-between">
            {OfertasData.map((data, index) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className={`space-y-3 rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/30 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group flex flex-col ${
                  index === 0 ? "text-left" : index === 1 ? "text-center" : "text-right"
                }`}
              >
                <div className="relative">
                  <img
                    src={data.img}
                    alt=""
                    className="h-[199px] w-[200px] object-cover rounded-md mx-auto"
                  />
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="font-bold text-xl">{data.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{data.description}</p>
                  <p className="text-lg font-semibold">{data.price}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Botón Comprar */}
          <div className="flex justify-center mt-10">
            <button className="text-center cursor-pointer bg-primary text-white py-1 px-5 rounded-md hover:scale-105 duration-300">
              COMPRAR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HardParts;
