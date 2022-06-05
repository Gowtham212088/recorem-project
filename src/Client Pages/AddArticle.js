import React from "react";
import { useState } from "react";

function AddArticle() {
  const [form, setForm] = useState();
  const handleSubmit = (ele) => {
    ele.preventDefault();
    console.log(form);
  };
  return (
    <div>
      <section className="py-4 article-here-card">
        <div className="container ">
          <div className="row">
           <div className="col-md-12 text-center">
           <h1 className="stylish-font">Write Your Article Here .<span class="iconify feather-icon" data-icon="noto:feather" data-flip="horizontal"></span>  </h1>
           </div>
          </div>
        </div>
      </section>

      <section className="section ">
        <div className="container">
          <div className="card shadow">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                <div className="row">
                   <img className="col-md-12 img" src="https://img.freepik.com/free-vector/creative-writing-concept-illustration_114360-8167.jpg?t=st=1654365066~exp=1654365666~hmac=aba750bebf4b7932999881af0970f5eb3cd1f7bb703a88e87a88ce05d05124a6&w=826" height="700"/>
                   </div>
                  
                </div>

                <div className="col-md-6 border-right-0">
                <h6> Article Form </h6>
                  <hr />
                  <form className="d-flex flex-column gap-3" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="stylishfont" for="Author-Name"> Author Name </label>
                    <input
                    name="Author-Name"
                      type="text"
                      className="form-control"
                     
                      placeholder="Enter Full Name"
                    />
                  </div>

                  <div className="form-group">
                    <label className="stylishfont" for="Email"> Email </label>
                    <input
                    name="Email"
                      type="email"
                      className="form-control"
                      
                      placeholder="E-mail"
                    />
                  </div>

                  <div className="form-group">
                    <label className="stylishfont" for="Tittle"> Tittle </label>
                    <input
                    name="Tittle"
                      type="text"
                      className="form-control"
                      
                      placeholder="Enter Tittle"
                    />
                  </div>

                  <div className="form-group">
                    <label className="stylishfont" for="Description"> Description </label>
                    <input
                    name="Description"
                      type="text"
                      className="form-control"
                      
                      placeholder="Description"
                    />
                  </div>

                  <div className="form-group">
                    <label className="stylishfont" for="article"> Article </label>

                    <textarea
                      rows="3"
                      cols="4"
                      className="form-control place-holder "
                      placeholder="Your Article Here . . ."
                    ></textarea>
                  </div>

                  <div className="form-group" py-3>
                    <button
                      type="button"
                      className="btn btn-primary shadow w-100 "
                    >
                      {" "}
                      Post Message{" "}
                    </button>
                  </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default AddArticle;
