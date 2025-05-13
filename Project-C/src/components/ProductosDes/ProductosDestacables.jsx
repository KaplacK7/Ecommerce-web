import React from "react";
import { FaStar } from "react-icons/fa";

import Img6 from "../../assets/product/kitmantencion.jpg";
import Img7 from "../../assets/product/ruea.png";
import Img8 from "../../assets/product/hardparts.png";

const ProductsData = [
  {
    id: 6,
    img: Img6,
    title: "KIT DE MANTENCION",
    rating: 5.0,
    color: "",
    link: "/kit-mantencion",
    aosDelay: "2",
  },
  {
    id: 7,
    img: Img7,
    title: "REPUESTOS DE MANTENCION",
    rating: 4.5,
    color: " ",
    link: "/repuestos-mantencion",
    aosDelay: "0",
  },
  {
    id: 8,
    img: Img8,
    title: "HARD PARTS",
    rating: 4.5,
    color: "",
    link: "/hard-parts",
    aosDelay: "0",
  }
]

const ProductosDestacables = () => {
  return (
    <div className="text-left mb-30">
      <div className="container">
        <div className="text-center mb-xl max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-xl text-primary">
            Tenemos dividido en 
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Categorías
          </h1>
          <p data-aos="fade-up" className="text-xl text-gray-400">
            Encuentra todo lo que necesites aquí
          </p>
        </div>
        <div className="grid grid-cols-3 gap-5 justify-center">
          {ProductsData.map((data) => (
            <a href={data.link} key={data.id} className="group">
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                className="space-y-3 rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group"
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[199px] w-[200px] object-cover rounded-md mx-auto"
                />
                <div className="p-4">
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <div className="w-full flex items-center justify-center gap-1">
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <button className="text-center cursor-pointer bg-primary text-white py-1 px-5 rounded-md hover:scale-105 duration-300">
            Pulsa la imagen
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductosDestacables;
