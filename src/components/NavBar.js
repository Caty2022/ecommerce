import React from 'react'
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary-subtle ">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">
                  Empresa
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Productos
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Abrigos
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Calzado
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item" href="#">
                      Pantalones
                    </a>
                  </li>
                </ul>
              </li>
            </ul>

            <a className="nav-link " aria-current="page" href="#">
              <CartWidget /> 
            </a>
          </div>
        </div>
      </nav>
    </>
  );
  
    
  
}

export default NavBar;