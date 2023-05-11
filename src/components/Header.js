import React from "react";
import logobaby from "../images/logobaby.webp";

const Header = () => {
  return (
    <div className="container-fluid">
      <div className="row bg-light p-3">
        <div className="col-md-6">
          <a href="/">
            <img src={logobaby} alt="logo" width={35}></img>{" "}
          </a>
          <p className="nombrelogo">BabyClothes</p>
        </div>
        <div className="col-md-6 text-end">
          <a href="/" className="text-dark text-decoration-none">
            Buscar Tienda
          </a>{" "}
          |{" "}
          <a href="/" className="text-dark text-decoration-none">
            Ayuda
          </a>{" "}
        </div>
      </div>
    </div>
  );
};

export default Header;
