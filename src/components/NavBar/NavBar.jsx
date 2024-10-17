import React from "react";
import "./navbar.css"; //como está en la misma carpeta utilizo ./
import Cartwidget from "./Cartwidget";//Fíjate que la importación de este archivo jsx es distinta a la del archivo css
const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="brand">
        <h2>Ecommerce</h2>
      </div>

      <Cartwidget/>
    </nav>
  );
};

export default NavBar; //Este tipo de exportación es útil para exportar un solo archivo para más archivos se utiliza la exportación con llaves
