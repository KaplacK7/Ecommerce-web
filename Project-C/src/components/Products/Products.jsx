import React from "react";
import { FaStar } from "react-icons/fa6";
import Img1 from "../../assets/product/w.png";
import Img2 from "../../assets/product/filtrokit.png";
import Img3 from "../../assets/product/i.png";
import Img4 from "../../assets/product/em.png";
import Img5 from "../../assets/product/ass.png";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Filtro",
    rating: 5.0,
    color: "NISSAN",
    aosDelay: "200", // Ajusta el retraso de la animación según sea necesario
  },
  {
    id: 2,
    img: Img2,
    title: "KIT FILTROS",
    rating: 4.5,
    color: "Filtros y Aceite",
    aosDelay: "400", // Ajusta el retraso de la animación según sea necesario
  },
  {
    id: 3,
    img: Img3,
    title: "Banda",
    rating: 4.7,
    color: "KIA, HYUNDAI",
    aosDelay: "600", // Ajusta el retraso de la animación según sea necesario
  },
  {
    id: 4,
    img: Img4,
    title: "Empaquetadura",
    rating: 4.4,
    color: "KIA",
    aosDelay: "800", // Ajusta el retraso de la animación según sea necesario
  },
  {
    id: 5,
    img: Img5,
    title: "Filtro TOYOTA",
    rating: 4.5,
    color: "AC60F 4WD 15-UP",
    aosDelay: "1000", // Ajusta el retraso de la animación según sea necesario
  },
];

const Products = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-30 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-xl text-primary">
            Aquí encuentras Los 
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Productos
          </h1>
          <p data-aos="fade-up" className="text-xl text-gray-400">
            Más Solicitados De la Empresa
          </p>
        </div>
        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* card section */}
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay} // Aquí se utiliza el atributo 'aosDelay' de cada elemento
                key={data.id}
                className="space-y-3 rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group"
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[199px] w-[200px] object-cover rounded-md"
                />
                <div className="p-4">
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* view all button */}
          <div className="flex justify-center mt-10">
            <button className="text-center cursor-pointer bg-primary text-white py-1 px-5 rounded-md hover:scale-105 duration-300">
              Ver Productos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
