import { Link as ReactLink } from 'react-router-dom';
import React, { useState, useEffect } from "react";


function Header(props) {

    let currentPath = props.path;

    let homeClass = currentPath === '/' ? 'active' : '';
    let aboutClass = currentPath === '/about' ? 'active' : '';
    let pricingClass = currentPath === '/pricing' ? 'active': '';
    let contactClass = currentPath === '/contact' ? 'active' : '';
    let loginClass = '';






    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Fifth navbar example">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Dubai Books</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExample05">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item"><ReactLink to="/" className={`nav-link  ${homeClass}`} >Home</ReactLink>
                </li>
        <li className="nav-item"><ReactLink to="/about" className={`nav-link ${aboutClass}`}>About</ReactLink>
                </li>
            <li className="nav-item"><ReactLink to="/contact" className={`nav-link ${contactClass}`}>Contact</ReactLink>
                </li>
        
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Books</a>
            <ul className="dropdown-menu">
            <li className="dropdown-item" ><ReactLink to="/pricing" className={`nav-link  ${pricingClass} `} >Fiction</ReactLink></li>
            <li className="dropdown-item"><ReactLink to="/about" className={`nav-link ${pricingClass}`}>Non-Fiction</ReactLink></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <div class="text-end">
          <button type="button" class="btn btn-outline-light me-2"><ReactLink to="/login" className={`nav-link ${loginClass}`} >Login</ReactLink></button>
          <button type="button" class="btn btn-warning">Sign-up</button>
        </div>
      </div>
    </div>
  </nav>
    )
}

export default Header;