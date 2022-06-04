import React from "react";
import OurCompany from "./OurCompany"
import Vmc from "./VMC"
import OurServices from "./OurServices"
import Footer from "./Footer"
function Carousel() {
  return (
    <div>
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://images.unsplash.com/photo-1499080863200-1f37ed9cb653?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              class="d-block w-100"
              alt="girl-writing"
            />
            <div class="carousel-caption d-none d-md-block">
              <h5 className="text-muted">
                Presenting your thoughts to the world
              </h5>
              <p className="text-light">
                Article or document, book or novel everything need to get
                authentic.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1594643469650-dd506331ff7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              class="d-block w-100"
              alt="typewriting"
            />
            <div class="carousel-caption d-none d-md-block">
              <h5 className="text-muted">You write, we publish</h5>
              <p className="text-light">
                Don’t you want a successful career, than built your skills with
                publishing company.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1429216967620-ece20ff3a5f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
              class="d-block w-100"
              alt=""
            />
            <div class="carousel-caption d-none d-md-block">
              <h5 className="text-muted">Spread your Words</h5>
              <p className="text-light">
                Don’t wonder yourself with how to publish, just contact
                publishing company.
              </p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <OurCompany />
          <Vmc />
          <OurServices />
          <Footer />
    </div>
  );
}

export default Carousel;
