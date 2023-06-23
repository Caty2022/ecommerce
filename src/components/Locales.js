import React from 'react';
import ubicacion  from "../images/ubicacion.svg";

const Locales = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-5 offset-md-1 ">
          <img src={ubicacion} alt="Ubicacion" width={24} />
          <h5 className="text-primary">CÓRDOBA PASEO DEL JOCKEY</h5>
          <p>Elias Yofre 1050, Córdoba, local 208/209 Lun a Dom 10 a 22 hs</p>
        </div>
        <div className="col-md-5 offset-md-1">
          <img src={ubicacion} alt="Ubicacion" width={24} />
          <h5 className="text-primary">TIENDA JARDÍN</h5>
          <p>
            Cordoba Shopping. Local 114. Jose A. de Goyechea 2851. Ciudad de
            Cordoba Lun a Dom 10 a 22 hs
          </p>
        </div>
        <div className="col-md-5 offset-md-1">
          <img src={ubicacion} alt="Ubicacion" width={24} />
          <h5 className="text-primary">TIENDA VILLA MARIA</h5>
          <p>San Martin71, Villa María. Lun a Dom 10 a 22 hs</p>
        </div>
        <div className="col-md-5 offset-md-1">
          <img src={ubicacion} alt="Ubicacion" width={24} />
          <h5 className="text-primary">TIENDA RIO CUARTO</h5>
          <p>Constitucion 847, Rio Cuarto. Lun a Dom 10 a 22 hs</p>
        </div>
      </div>
    </div>
  );
}

export default Locales;