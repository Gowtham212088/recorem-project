import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container-fluid nav-container ps-0 pe-0 opacity-75 fixed-top">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid py-2">
          <Link className="navbar-brand" >
            <span id="pen-slingers">
              {" "}
              <span className="letter-gold">P</span>en{" "}
              <span className="letter-gold">S</span>lingers{" "}
            </span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav ms-auto d-flex justify-content-between">
              <li className="nav-item">
                <Link to="/Login" className="nav-a active" aria-current="page" >
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/signup" className="nav-a nav-signup " >
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