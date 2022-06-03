import React from "react";
import { useState } from "react";
function OurCompany() {
  const [show, setShow] = useState(false);

  const styles = { display: show ? "none" : "block" };

  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2 className="main-heading">
                Our company
                <div className="underline mx-auto"></div>
                <p id="our_company-p-tag">
                  Article Writing Company is a wholesale content writing
                  service. A group of talented and professional article writers
                  from across Canada and the US. Our principle competency is as
                  a third party and flexible outside resource partnering with
                  different marketing agencies. PR, SEO, Social Media, really
                  any marketing agency that has a serious volume of content
                  needs on an ongoing basis.Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.It has survived not only five centuries, but
                  also the{" "}
                  <div style={styles}>
                    {" "}
                    leap into electronic typesetting, remaining essentially
                    unchanged. It was popularised in the 1960s with the release
                    of Letraset sheets containing Lorem Ipsum passages, and more
                    recently with desktop publishing software like Aldus
                    PageMaker including versions of Lorem Ipsum.
                  </div>
                </p>
                {show ? (
                  <button
                    onClick={() => setShow(!show)}
                    className="btn btn-warning shadow"
                  >
                    {" "}
                    Read More{" "}
                  </button>
                ) : (
                  <button
                    onClick={() => setShow(!show)}
                    className="btn btn-warning shadow"
                  >
                    {" "}
                    Hide{" "}
                  </button>
                )}
              </h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default OurCompany;
