import React from 'react'
import { useState } from "react";
import { Navigate } from "react-router-dom";

const Contacto = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [enviarMensaje, setEnviarMensaje] = useState("false");

  const contactoSaludo = () => {
    if (nombre.length === 0) {
      return true;
    }

    if (email.length === 0) {
      return true;
    }

    if (telefono.length === 0) {
      return true;
    }
    if (enviarMensaje && <Navigate to={"/mensajerecibido/"} />);
  };
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-5 offset-md-1">
          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input
              type="text"
              className="form-control"
              onInput={(e) => {
                setNombre(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="text"
              className="form-control"
              onInput={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Telefono</label>
            <input
              type="text"
              className="form-control"
              onInput={(e) => {
                setTelefono(e.target.value);
              }}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Mensaje</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
            <br></br>
            <button
              type="button"
              className="btn btn-light"
              onClick={contactoSaludo}
            >
              Enviar Mensaje
            </button>
          </div>
        </div>
      </div>
      <div className="row my-5">
        <div className="col text-center">
          <Navigate to={"/mensajerecibido/"} />
        </div>
      </div>
    </div>
  );
};

export default Contacto;

