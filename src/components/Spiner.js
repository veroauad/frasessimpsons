//creo el componente spiner
//es el circulito que gira mientras se carga lo que queremos mostrar

import React from "react";

//hago el import de la hoja de estilos

import "./spiner.css"

const Spiner = () => {
  return (
    <div className="sk-cube-grid">
      <div className="sk-cube sk-cube1"></div>
      <div className="sk-cube sk-cube2"></div>
      <div className="sk-cube sk-cube3"></div>
      <div className="sk-cube sk-cube4"></div>
      <div className="sk-cube sk-cube5"></div>
      <div className="sk-cube sk-cube6"></div>
      <div className="sk-cube sk-cube7"></div>
      <div className="sk-cube sk-cube8"></div>
      <div className="sk-cube sk-cube9"></div>
    </div>
  );
};

export default Spiner;
