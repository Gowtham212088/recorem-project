import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container-fluid nav-container ps-0 pe-0 opacity-75 fixed-top">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid py-2">
          <Link class="navbar-brand" href="#">
           <span  id="pen-slingers"> <span className="letter-gold">P</span>en <span className="letter-gold">S</span>lingers </span>   
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" href="#">
                  Login
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" href="#">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
