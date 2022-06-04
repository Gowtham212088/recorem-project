import React from "react";
import { useState } from "react";

function SignUp() {
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
                   <img className="col-md-12" src="https://img.freepik.com/free-vector/publish-article-concept-illustration_114360-4926.jpg?t=st=1654355913~exp=1654356513~hmac=5b611a157dec74db311d74637502cb70e80f33677b92fba4d365fc08726febe5&w=1380" height="380" alt=""/>
                   </div>
                  
                </div>

                <div className="col-md-6 border-right-0">
                <h6> Article Form </h6>
                  <hr />
                  <div className="form-group">
                    <label className="stylishfont" for="Author-Name"> Author Name </label>
                    <input
                    name="Author-Name"
                      type="text"
                      className="form-control"
                      value=""
                      placeholder="Enter Full Name"
                    />
                  </div>

                  <div className="form-group">
                    <label className="stylishfont" for="Email"> Email </label>
                    <input
                    name="Email"
                      type="text"
                      className="form-control"
                      value=""
                      placeholder="Enter Full Name"
                    />
                  </div>

                  <div className="form-group">
                    <label className="stylishfont" for="Tittle"> Tittle </label>
                    <input
                    name="Tittle"
                      type="text"
                      className="form-control"
                      value=""
                      placeholder="Enter Full Name"
                    />
                  </div>

                  <div className="form-group">
                    <label className="stylishfont" for="Description"> Description </label>
                    <input
                    name="Description"
                      type="text"
                      className="form-control"
                      value=""
                      placeholder="Description"
                    />
                  </div>

                  <div className="form-group">
                    <label className="stylishfont" for="article"> Article </label>

                    <textarea
                      rows="3"
                      cols="4"
                      className="form-control"
                      placeholder="Your Article Here . . ."
                    ></textarea>
                  </div>

                  <div className="form-group" py-3>
                    <button
                      type="button"
                      className="btn btn-primary shadow w-100"
                    >
                      {" "}
                      Send Message{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default SignUp;
