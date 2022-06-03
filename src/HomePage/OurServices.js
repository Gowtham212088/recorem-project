import React from "react";

function OurServices() {
  return (
    <div>
      <section className="section bg-c-light border-top">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-4 text-center">
              <h3 className="main-heading">Our Services</h3>
              <div className="underline mx-auto"></div>
            </div>

            <div className="col-md-4">
              <div className="card shadow">
                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  className="w-100 border-bottom"
                  alt="services-1"
                />
                <div className="card-body">
                  <h6> Services 1 </h6>
                  <div className="underline"> </div>
                  <p>
                    Lorem ipsum is simply dummy text of the printing and
                    typingsetting industry.
                  </p>
                  <a to="/services" className="btb btn-warning shadow">
                    {" "}
                    Read More{" "}
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow">
                <img
                  src="https://images.unsplash.com/photo-1553685588-ab6c49beebc3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  className="w-100 border-bottom"
                  alt="services-2"
                />
                <div className="card-body">
                  <h6> Services 2 </h6>
                  <div className="underline"> </div>
                  <p>
                    Lorem ipsum is simply dummy text of the printing and
                    typingsetting industry.
                  </p>
                  <a to="/services" className="btb btn-warning shadow">
                    {" "}
                    Read More{" "}
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow">
                <img
                  src="https://images.unsplash.com/photo-1506513083865-434a8a207e11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  className="w-100 border-bottom"
                  alt="services-3"
                />
                <div className="card-body">
                  <h6> Services 3 </h6>
                  <div className="underline"> </div>
                  <p>
                    Lorem ipsum is simply dummy text of the printing and
                    typingsetting industry.
                  </p>
                  <a to="/services" className="btb btn-warning shadow">
                    {" "}
                    Read More{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default OurServices;
