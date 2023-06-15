import React from 'react';
import {Link} from 'react-router-dom';

const Item = ({producto}) => {
  return (
    <>
      <div key={producto.idx} className="col-md-4 my-3">
        <div className="card border border-0">
            <img
              src={producto.imagen}
              className="card-img-top"
              alt={producto.titulo}
            />
            <div className="card-body">
              <h3>{producto.titulo}</h3>
              <p className="card-text">
                {producto.descripcion}
                <br />
                <b>${producto.precio}</b>
              </p>
              <Link to={"/item/" + producto.idx} className="btn btn-dark">Ver Mas</Link>
            </div>
          </div>
      </div>
    </>
  );
}

export default Item;