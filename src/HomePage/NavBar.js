import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <span id="pen-slingers">
              {" "}
              <span className="letter-gold">P</span>en{" "}
              <span className="letter-gold">S</span>lingers{" "}
            </span>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse home-about-articles"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <h2 className="text-muted nav-text-hover">
                  {" "}
                  <a class="nav-link" aria-current="page">
                    <span
                      class="iconify icon-color"
                      data-icon="fluent:home-20-regular"
                      data-width="45"
                      id="home-icon-position"
                      data-height="40"
                    ></span>{" "}
                    Home
                  </a>{" "}
                </h2>
              </li>

              <li class="nav-item">
                <h2 id="about-nav">
                  {" "}
                  <a class="nav-link nav-text-hover">
                    {" "}
                    <span
                      class="iconify icon-color"
                      data-icon="bi:info-square"
                      data-width="30"
                      data-height="60"
                    ></span>{" "}
                    About{" "}
                  </a>{" "}
                </h2>
              </li>

              <li class="nav-item">
                <h2>
                  {" "}
                  <a class="nav-link nav-text-hover">
                    {" "}
                    <span
                      class="iconify icon-color"
                      data-icon="material-symbols:mark-chat-read-outline"
                      data-width="35"
                      data-height="35"
                    ></span>{" "}
                    Articles
                  </a>{" "}
                </h2>
              </li>

              <li class="nav-item">
                <h2>
                  {" "}
                  <a class="nav-link nav-text-hover">
                    {" "}
                    <span
                      class="iconify icon-color"
                      data-icon="gridicons:create"
                      data-width="50"
                      data-height="35"
                    ></span>{" "}
                    Articles
                  </a>{" "}
                </h2>
              </li>

              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="#">
                      Logout
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <div class="d-flex">
              <ul>
                <li class="nav-item">
                  <h2>
                    {" "}
                    <a class="nav-link nav-text-hover">
                      {" "}
                      <span
                        class="iconify icon-color"
                        data-icon="material-symbols:mark-chat-read-outline"
                        data-width="35"
                        data-height="35"
                      ></span>{" "}
                      Login{" "}
                    </a>{" "}
                  </h2>
                </li>

                <li class="nav-item">
                  <h2>
                    {" "}
                    <a class="nav-link nav-text-hover">
                      {" "}
                      <span
                        class="iconify icon-color"
                        data-icon="material-symbols:mark-chat-read-outline"
                        data-width="35"
                        data-height="35"
                      ></span>{" "}
                      SignUp{" "}
                    </a>{" "}
                  </h2>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
