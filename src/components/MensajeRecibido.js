import React from 'react'
import { Link } from "react-router-dom";


const MensajeRecibido = () => {
   
   return (
    <div className="container my-5">
      <div className="row">
        <div className="col text-center">
          <div className="alert alert-light p-5" role="alert">
            <h1 className="fs-1 text">Gracias por tu Mensaje!</h1>
            <p>
              <Link to={"/"} className="btn btn-light mt-3">
                Volver al Inicio
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MensajeRecibido;