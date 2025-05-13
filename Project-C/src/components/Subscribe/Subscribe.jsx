import React from "react";
import Banner from "../../assets/website/jo.jpg";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Subscribe = () => {
  return (
    <div className="relative mb-20 bg-gray-100 dark:bg-gray-800 text-white">
      <div
        className="absolute inset-0 backdrop-blur-sm"
        style={BannerImg}
      ></div>
      <div className="container relative z-10 py-10">
        <div className="space-y-6 max-w-xl mx-auto">
          <h1 className="text-2xl !text-center sm:text-left sm:text-4xl font-semibold">
            Para Más Información
          </h1>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Ingrese su Email"
              className="w-full p-3 bg-transparent border border-gray-300 focus:border-primary rounded-md"
            />
            <button className="bg-primary text-white py-2 px-4 rounded-md hover:bg-secondary ml-2">
              Enviar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
