import React from "react";
import Img1 from "../assets/shirt/p.png";
import Img2 from "../assets/shirt/t.png";
import Img3 from "../assets/shirt/q-removebg-preview.png";

const ProductosData = [
  {
    id: 1,
    img: Img1,
    title: "Filtro",
    description: "Descripción del filtro",
    price: "$19.99",
    aosDelay: "2",
  },
  {
    id: 2,
    img: Img2,
    title: "KIT FILTROS",
    description: "Descripción del kit de filtros",
    price: "$29.99",
    aosDelay: "0",
  },
  {
    id: 3,
    img: Img3,
    title: "KIT FILTROS",
    description: "Descripción del kit de filtros",
    price: "$29.99",
    aosDelay: "0",
  },
];

const RepuestosMantencion = () => {
  return (
    <div className="mt-24 mb-12">
      <div className="container relative">
        {/* Header */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-4xl font-bold text-primary">
            Super Kits 
          </p>
          <p data-aos="fade-up" className="text-2xl font-semibold text-gray-400">
            Aquí encontrarás los Kits a los mejores precios:
          </p>
        </div>
        {/* seccion de filtros */}
        <div className="absolute top-0 right-0 z-10 bg-white p-4 shadow-lg rounded-md">
          {/* Aquí puedes agregar tus opciones de filtro */}
          <select className="border border-gray-300 rounded-md px-2 py-1">
            <option value="">Ordenar por Nombre A-Z</option>
            <option value="">Ordenar por Precio menor a mayor</option>
          </select>
        </div>
        {/* Body seccion */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* secciones */}
            {ProductosData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3 rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/30 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group flex flex-col"
              >
                <div className="relative">
                  <img
                    src={data.img}
                    alt=""
                    className="h-[199px] w-[200px] object-cover rounded-md"
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
          {/* view de todos los botones  */}
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

export default RepuestosMantencion;
