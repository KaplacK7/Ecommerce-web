import React from "react";
import Img1 from "../assets/shirt/p.png";
import Img2 from "../assets/shirt/t.png";

const OfertasData = [
  {
    id: 1,
    img: Img1,
    title: "Filtro",
    color: "NISSAN",
    aosDelay: "2",
  },
  {
    id: 2,
    img: Img2,
    title: "KIT FILTROS",
    color: "Filtros y Aceite",
    aosDelay: "0",
  },
];

const Ofertas = () => {
  return (
    <div className="mt-24 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Super Kits 
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Aqui encontraras los Kits a los mejores precios:
          </p>
        </div>
        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* card section */}
            {OfertasData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3 rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/30 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group"
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[199px] w-[200px] object-cover rounded-md"
                />
                <div className="p-4">
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                </div>
              </div>
            ))}
          </div>
          {/* view all button */}
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
