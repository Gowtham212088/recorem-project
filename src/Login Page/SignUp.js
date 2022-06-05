import React, { useState } from "react";

function SignUp() {
  const [form, setForm] = useState();
  const handleSubmit = (ele) => {
    ele.preventDefault();
    console.log(form);
  };

  return (
      <div>
    <div className="container signUp-form ">
      <div className="row d-flex justify-content-center aligen-items-center ">
        <div className="col-lg-6  signup-box">
          <form className="d-flex flex-column gap-3 " onSubmit={handleSubmit}>
                    <h1 className="d-flex justify-content-center stylishfont-signup-word"> Sign Up </h1>
          <div className="form-group mt-5">
                    <label className="stylishfont text-warning" for="Name"> Name </label>
                    <input
                    name="Name"
                      type="text"
                      className="form-control place-holder"
                     
                      placeholder="Enter Full Name"
                    />
                  </div>

                  <div className="form-group">
                    <label className="stylishfont text-warning" for="Email"> Email </label>
                    <input
                    name="Email"
                      type="email"
                      className="form-control place-holder" 
                      
                      placeholder="Enter Full Name"
                    />
                  </div>

                  <div className="form-group">
                    <label className="stylishfont text-warning" for="Contact"> Contact No </label>
                    <input
                    name="Contact"
                      type="number"
                      className="form-control place-holder"
                      
                      placeholder="Enter Full Name"
                    />
                  </div>

                   <div className="form-group">
                    <label className="stylishfont text-warning" for="Password"> Password </label>
                    <input
                    name="Password"
                      type="password"
                      className="form-control place-holder"
                      
                      placeholder="Enter Full Name"
                    />
                  </div>

                  <button
                      type="button"
                      className="btn btn-warning shadow w-100 my-5"
                    >
                      {" "}
                      Sign Up{" "}
                    </button>

          </form>
        </div>
      </div>
    </div>
    </div>
  );
}

export default SignUp;
