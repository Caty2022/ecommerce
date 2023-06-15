import React from 'react'
import CartWidget from './CartWidget';
import './NavBar.css';
import { NavLink } from 'react-router-dom';

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
                <NavLink className="nav-link " aria-current="page" to={'inicio'}>
                  Inicio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to={'locales'}>
                  Locales
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  to="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Productos
                </NavLink>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink className="dropdown-item" to={"/categoria/abrigos"}>
                      Abrigos
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to={"/categoria/calzado"}>
                      Calzado
                    </NavLink>
                  </li>

                  <li>
                    <NavLink className="dropdown-item" to={"/categoria/pantalones"}>
                      Pantalones
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>

            <NavLink className="nav-link " aria-current="page" to="/">
              <CartWidget /> 
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
  
    
  
}

export default NavBar;