import React from 'react'
import facebook from '../images/facebook.svg';
import instagram from '../images/instagram.svg';
import twitter from '../images/twitter.svg';
import whatsapp from '../images/whatsapp.svg';
import cambio from '../images/cambio.webp';
import regalos from '../images/regalos.webp';
import contactanos from '../images/contactanos.webp';
import envio from '../images/envio.webp';
import cuotas from '../images/cuotas.webp';
import retiro from '../images/retiro.webp';
import { Link } from 'react-router-dom';



const Footer = () => {
  return (
    <div className="container-fluid bg-light ">
      <footer className="py-1 mt-5">
        <div className="row">
          <div className="col-6 col-md-4 mb-3 ">
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link
                  to="/"
                  className="nav-link p-0 text-body-secondary  text-center"
                >
                  <img src={cambio} alt={cambio} width={60} />
                  <p>Cambios y devoluciones gratis</p>
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-4 mb-3">
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link
                  to="/"
                  className="nav-link p-0 text-body-secondary text-center"
                >
                  <img src={regalos} alt={regalos} width={60} />
                  <p>El arte de regalar</p>
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-4 mb-3">
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link
                  to="/"
                  className="nav-link p-0 text-body-secondary text-center"
                >
                  <img src={contactanos} alt={contactanos} width={60} />
                  <p>Contactate con nosotros</p>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-4 mb-3">
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link
                  to="/"
                  className="nav-link p-0 text-body-secondary text-center"
                >
                  <img src={cuotas} alt={cuotas} width={60} />
                  <p>6 cuotas sin interes a partir de los $50.000</p>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-4 mb-3">
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link
                  to="/"
                  className="nav-link p-0 text-body-secondary text-center"
                >
                  <img src={retiro} alt={retiro} width={60} />
                  <p>Retiro pick up en nuestras tiendas</p>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-4 mb-3">
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link
                  to="/"
                  className="nav-link p-0 text-body-secondary text-center"
                >
                  <img src={envio} alt={envio} width={60} />
                  <p>Envio gratis en compras superiores a $40.000</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <p>&copy; 2023 BabyClothes | Todos los derechos reservados.</p>

          <ul className="nav col-md-2 justify-content-end">
            <li className="ms-3">
              {" "}
              <Link to="/" className="text-light me-1" target={"_blank"}>
                {" "}
                <img src={facebook} alt={facebook} width={20} />
              </Link>
            </li>
            <li className="ms-3">
              <Link to="/" className="text-light me-1" target={"_blank"}>
                {" "}
                <img src={instagram} alt={instagram} width={20} />
              </Link>
            </li>
            <li className="ms-3">
              <Link to="/" className="text-light me-1" target={"_blank"}>
                {" "}
                <img src={twitter} alt={twitter} width={20} />
              </Link>
            </li>
            <li className="ms-3">
              <Link to="/" className="text-light me-1" target={"_blank"}>
                {" "}
                <img src={whatsapp} alt={whatsapp} width={20} />
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
