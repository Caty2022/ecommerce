import React from "react";
import logobaby from "../images/logobaby.webp";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="container-fluid">
      <div className="row bg-light p-1">
        <div className="col-md-6">
          <Link to="/">
            <img src={logobaby} alt="logo" width={35}></img>{" "}
          </Link>
          <p className="nombrelogo">
            {" "}
            <b>BabyClothes</b>
          </p>
        </div>
        <div className="col-md-6 text-end">
          <Link to="/" className="text-dark text-decoration-none">
            Tienda
          </Link>{" "}
          |{" "}
          <Link to={"contacto"} className="text-dark text-decoration-none">
            Contacto
          </Link>{" "}
        </div>
      </div>
    </div>
  );
};

export default Header;
