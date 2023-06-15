import React from 'react'
import inicio1 from "../images/inicio1.webp";
import inicio2 from "../images/inicio2.jpg";
import inicio3 from "../images/inicio3.jpg";
import "./Inicio.css"

const Inicio = () => {
  return (
    <div classNameName="container my-5">
      <div classNameName="row">
        <div classNameName="col text-center">
          <h1 className='titulo'>BabyClothes</h1>
          <p className='parrafo'>
            BabyClothes nace en 1999, cuando su creadora María Paz de la Piedra
            nacida en Perú, desarrolla una marca de indumentaria para bebés y
            niños basada en la calidad única del algodón pima, el cuidado en los
            detalles y el desarrollo de exclusivos diseños. Desde entonces, la
            marca se ha convertido en un prestigioso referente internacional.
            Fiel a su legado y valores, es una marca muy valorada por su calidad
            e inconfundible estilo.
          </p>
        </div>
      </div>
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner ">
          <div className="carousel-item active " data-bs-interval="1000">
            <img src={inicio1} className="d-block w-100" alt={inicio1} />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={inicio2} className="d-block w-100" alt={inicio2} />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={inicio3} className="d-block w-100" alt={inicio3} />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
 }

export default Inicio;