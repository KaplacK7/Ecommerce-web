import React from "react";
import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const Menu = [
  {
    id: 1,
    name: "inicio",
    link: "/inicio",
  },
  {
    id: 2,
    name: "¿Quienes Somos?",
    link: "/quienes-somos",
  },
  {
    id: 3,
    name: "Contacto",
    link: "/contacto",
  },
  {
    id: 4,
    name: "Kits",
    link: "/kits",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Kit de Reparacion",
    link: "/kits",
  },
  {
    id: 2,
    name: "Filtros",
    link: "/filtros-kit",
  },
  {
    id: 3,
    name: "Juegos de Empaquetadura",
    link: "/empaquetadura",
  },
];

const Navbar = ({ handleOrderPopup }) => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 z-40 fixed top-0 left-0 w-full">
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          <div>
            <Link to="/inicio" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={Logo} alt="Logo" className="w-10" />
              Bienvenidos a Cajas Automaticas 
            </Link>
          </div>

          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Buscar"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800  "
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>

            <button
              onClick={() => handleOrderPopup()}
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white  py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Carrito
              </span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>

            <div>
              {/* Agregar número de teléfono y dirección aquí */}
              <p className="text-sm text-gray-1000">José Toribio Medina 7  </p>
              <p className="text-sm text-gray-1000">| +56 9 93830372 |</p>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="zoom-in" className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <Link to={data.link} className="inline-block px-4 hover:text-primary duration-200">
                {data.name}
              </Link>
            </li>
          ))}
          <li className="group relative cursor-pointer">
            <Link to="#" className="flex items-center gap-[2px] py-2">
              Listas de Productos
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </Link>
            <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <Link to={data.link} className="inline-block w-full rounded-md p-2 hover:bg-primary/20 ">
                      {data.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
