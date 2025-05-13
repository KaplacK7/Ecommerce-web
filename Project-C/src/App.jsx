import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import AOS from "aos"; 
import "aos/dist/aos.css";
import axios from "axios";

import TopProducts from "./components/TopProducts/TopProducts";
import Subscribe from "./components/Subscribe/Subscribe";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";
import ProductosDestacables from "./components/ProductosDes/ProductosDestacables";

import QuienesSomos from "./pages/QuienesSomos";
import Contacto from "./pages/Contacto";
import Kits from "./pages/Kits";
import TerminosDespacho from "./pages/TerminosDespacho";
import Micuenta from "./pages/Micuenta";
import Registro from "./pages/Registro";
import Usuario from "./pages/Usuario";
import HardParts from "./pages/HardParts";
import RepuestosMantencion from "./pages/RepuestosMantencion";
import Mantencion from "./pages/Mantencion";

const Home = () => (
  <>
    <Hero />
    <Products />
    <TopProducts />
    <Subscribe />
    <ProductosDestacables />
    <Testimonials />
    <Popup />
  </>
);

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  const [orderPopup, setOrderPopup] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  // Función de login
  const loginUser = async (email, password) => {
    axios.post("http://127.0.0.1:8000/funcion/login/", {
      email: email,
      password: password
    })
    .then((response) => {
      console.log(response.data);
      setCurrentUser(response.data.user);  // Aquí actualizas el estado de currentUser
      localStorage.setItem('currentUser', JSON.stringify(response.data.user)); // Almacenamos el usuario
    })
    .catch((error) => {
      console.error("Error logging in:", error);
    });
  };

  const registerUser = async (email, username, password, confirmPassword) => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/registro/", {
        email: email,
        username: username,
        password: password,
        confirmPassword: confirmPassword
      });
      console.log(response.data);
      alert("¡Usuario registrado exitosamente! Ahora puedes iniciar sesión.");
    } catch (error) {
      console.error("Error registering user:", error);
      alert("Hubo un problema al registrar al usuario. Intenta de nuevo.");
    }
  };
  

  const logoutUser = () => {
    axios.post("http://127.0.0.1:8000/api/logout/")
    .then((response) => {
      console.log("Logout successful");
      setCurrentUser(null);
      localStorage.removeItem('currentUser'); // Limpiamos localStorage
    })
    .catch((error) => {
      console.error("Error logging out:", error);
    });
  };

  // Recuperamos al usuario desde localStorage al cargar la página
  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser)); // Recuperamos el usuario almacenado
    }
  }, []);

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <BrowserRouter>
        <Navbar handleOrderPopup={handleOrderPopup} />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Navigate to="/inicio" />} />
          <Route path="/inicio" element={<Home />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/kits" element={<Kits />} />
          <Route path="/TerminosDespacho" element={<TerminosDespacho />} />
          <Route path="/ingresar-cuenta" element={<Micuenta currentUser={currentUser} logoutUser={logoutUser} loginUser={loginUser} />} />
          <Route path="/registro" element={<Registro registerUser={registerUser} />} />
          <Route 
            path="/usuario" 
            element={currentUser ? <Usuario currentUser={currentUser} logoutUser={logoutUser} /> : <Navigate to="/ingresar-cuenta" />} 
          />
          <Route path="/hard-parts" element={<HardParts />} />
          <Route path="/repuestos-mantencion" element={<RepuestosMantencion />} />
          <Route path="/kit-mantencion" element={<Mantencion />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
