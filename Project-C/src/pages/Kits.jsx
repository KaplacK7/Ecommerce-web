import React from "react";
import Img1 from "../assets/shirt/t.png";
import Img2 from "../assets/shirt/p.png";
import Img3 from "../assets/shirt/q-removebg-preview.png";


const OfertasData = [
  {
    id: 1,
    img: Img1,
    title: "Banner Kit",
    color: "Vehiculos Compatibles Toyota",
    aosDelay: "200",
  },
  {
    id: 2,
    img: Img2,
    title: "Master Kit",
    color: "Vehiculos Compatibles Suzuki",
    aosDelay: "400",
  },
  {
    id: 3,
    img: Img3,
    title: "Super Kit",
    color: "Vehiculos Compatibles Suzuki",
    aosDelay: "600",
  },
];

const Ofertas = () => {
  return (
    <div className="mt-24 mb-12">
      <div className="container">
        {/* Header section - Mueve el título más abajo */}
        <div className="text-center mb-16 max-w-[600px] mx-auto mt-6">
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Banner Kits
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Aquí encontrarás los Kits a los mejores precios:
          </p>
        </div>

        {/* Body seccion */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 justify-between">
            {OfertasData.map((data, index) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className={`space-y-3 rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/30 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group ${index === 0 ? "text-left" : index === 1 ? "text-center" : "text-right"
                  }`}
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[199px] w-[200px] object-cover rounded-md mx-auto"
                />
                <div className="p-4">
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
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


export default Ofertas;
