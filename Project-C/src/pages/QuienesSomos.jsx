import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image1 from "../assets/marcas/alto-logo-color.png";
import Image2 from "../assets/marcas/logo japcop.png";
import Image3 from "../assets/marcas/logo toledo trans-kit.png";
import Image4 from "../assets/marcas/bryco.jpg";

const ImageList = [
  { id: 1, img: Image1 },
  { id: 2, img: Image2 },
  { id: 3, img: Image3 },
  { id: 4, img: Image4 },
];

const QuienesSomos = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    pauseOnFocus: true,
  };

  return (
    <div className="container mt-40">
      <div className="mx-auto bg-gray-100 p-8 rounded-lg shadow-lg mb-8">
        <h1 className="text-3xl font-bold mb-5 text-center">Nuestra Empresa</h1>
        <div className="text-left">
          <p className="mb-4">
            Desde 1947, la familia MISLEH ha sido sinónimo de calidad y compromiso en el mundo de los repuestos automotrices. Fundada por el Sr. Nuncio Misleh, la pasión por los automóviles ha sido transmitida de generación en generación, llevando el legado familiar a nuevas alturas.
          </p>
          <p className="mb-4">
            En Llamal Misleh y Cía. Ltda., establecida en 1973, nos especializamos en embragues, frenos, suspensión, y en brindar soluciones para vehículos Daewoo y Chevrolet. Continuando este legado, Comercial Granmarina Ltda., fundada en 1991 por J. Pierre Misleh, se dedica a la importación y distribución de partes para transmisiones automáticas.
          </p>
          <p className="mb-4">
            Nos enorgullece ser representantes en Chile y Argentina de marcas de renombre internacional, como JAPCO, BRYCO, TTK TOLEDO y ALTO PRODUCTS. Estas alianzas nos permiten ofrecer a nuestros clientes productos de la más alta calidad, respaldados por décadas de experiencia y liderazgo en la industria.
          </p>
          <p className="mb-4">
            Con amplias bodegas en ambos países, estamos estratégicamente ubicados para satisfacer las necesidades de nuestra distinguida clientela. Ya sea un servicio técnico, taller mecánico, distribuidor oficial de marcas o particular, en MISLEH nos comprometemos a brindar un servicio excepcional y productos confiables.
          </p>
          <p className="mb-9">
            ¿Tienes alguna consulta? ¡No dudes en contactarnos! Nuestro equipo estará encantado de asesorarte con el profesionalismo que te mereces.
          </p>
          <p>¡Bienvenido al mundo de calidad y confiabilidad de MISLEH!</p>
        </div>
      </div>

      <div className="mx-auto bg-gray-100 p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-5">TRABAJAMOS</h1>
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.id} className="mb-6">
              <img src={data.img} alt="" className="mx-auto" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default QuienesSomos;
