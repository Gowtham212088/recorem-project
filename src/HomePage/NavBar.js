import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
const navigate = useNavigate()
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <span class="navbar-brand" >
            <span id="pen-slingers">
              {" "}
              <span className="letter-gold">P</span>en{" "}
              <span className="letter-gold">S</span>lingers{" "}
            </span>
          </span>
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
                  <span onClick={()=>navigate("/Home")} class="nav-link" aria-current="page">
                    <span
                      class="iconify icon-color"
                      data-icon="fluent:home-20-regular"
                      data-width="45"
                      id="home-icon-position"
                      data-height="40"
                    ></span>{" "}
                    Home
                  </span>{" "}
                </h2>
              </li>

              <li class="nav-item ">
                <h2 id="about-nav">
                  {" "}
                  <span class="nav-link nav-text-hover">
                    {" "}
                    <span
                      class="iconify icon-color"
                      data-icon="bi:info-square"
                      data-width="30"
                      data-height="60"
                    ></span>{" "}
                    About{" "}
                  </span>{" "}
                </h2>
              </li>

              <abbr title="Read Article">
                {" "}
                <li class="nav-item">
                  <h2>
                    {" "}
                    <span class="nav-link nav-text-hover">
                      {" "}
                      <span
                        class="iconify icon-color"
                        data-icon="material-symbols:mark-chat-read-outline"
                        data-width="35"
                        data-height="35"
                      ></span>{" "}
                      Articles
                    </span>{" "}
                  </h2>
                </li>
              </abbr>

              <abbr title="Write article">
                <li onClick={()=>navigate("/WriteArticle")} class="nav-item">
                  <h2>
                    {" "}
                    <span class="nav-link nav-text-hover">
                      {" "}
                      <span
                        class="iconify icon-color"
                        data-icon="gridicons:create"
                        data-width="50"
                        data-height="35"
                      ></span>{" "}
                      Articles
                    </span>{" "}
                  </h2>
                </li>
              </abbr>

              <li class="nav-item dropdown">
                <h2
                class="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                >
                <span
                  
                >
               <span 
               class="iconify" 
               data-icon="carbon:user-avatar-filled-alt"
               data-width="50"
               data-height="55"
               ></span>   User
                </span> </h2>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <span class="dropdown-item">
                      Logout
                    </span>
                  </li>
                </ul>
              </li>
            </ul>
            <div class="d-flex flex-row">
              <ul>
                <li class="nav-item sign">
                  <h2>
                    {" "}
                    <span class="nav-link nav-text-hover">
                      {" "}
                      <span
                        class="iconify logout-icon-color"
                        data-icon="material-symbols:admin-panel-settings"
                        data-width="50"
                        data-height="50"
                      ></span>
                      Login
                    </span>
                  </h2>
                </li>

                <li class="nav-item sign">
                  <h2>
                    {" "}
                    <span onClick={()=>navigate("/signup")} class="nav-link nav-text-hover">
                      {" "}
                      <span
                        class="iconify logout-icon-color"
                        data-icon="ri:logout-circle-line"
                        data-width="50"
                        data-height="35"
                      ></span>
                      SignUp{" "}
                    </span>{" "}
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
