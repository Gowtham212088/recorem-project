import React from "react";

function Footer() {
  return (
    <div>
      <section className="section footer bg-dark text-white">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h6> Company Information </h6>
              <hr />

              <p className="text-white">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div className="col-md-4 text-light">
              <h6>Contact Information </h6>
              <hr />

              <div className="col-md-4">
                <div>
                  <p className="text-while mb-1 text-light">
                    #64, Chennai Tamilnadu India.{" "}
                  </p>
                </div>
                <div>
                  <p className="text-while mb-1 text-light"> +91 9999xxxxx1 </p>{" "}
                </div>
                <div>
                  <p className="text-while mb-1 text-light"> +91 9987xxxxx2 </p>{" "}
                </div>
                <div>
                  <p className="text-while mb-1 text-light"> someone@gmail.com </p>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Footer;
