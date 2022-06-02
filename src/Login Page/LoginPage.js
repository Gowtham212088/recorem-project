import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Navbar from "../HomePage/NavBar";
import { Link } from "react-router-dom";
function AdminLogin() {
  return (
    <div className="container-fluid ps-0 pe-0 login-entire-page">
      <Navbar />

      <div className="row admin-page-height ">
        {/* Page 1   */}
        <div className="col-lg-7 d-flex justify-content-center align-items-center admin-page-1">
          {/* LOGIN BOX */}

          <div className="row admin-login-background">
            <div className="col-12  login-box d-flex justify-content-center align-items-center">
              <div className="row   admin-text-field">
                <div className="d-flex justify-content-center  ">
                  {" "}
                  <h2 style={{ color: "#e81700" }}> Admin Login </h2>{" "}
                </div>
                <TextField
                  id="outlined-basic"
                  label="Admin - EMail"
                  variant="filled"
                  color="error"
                />

                <TextField
                  id="outlined-basic"
                  label="Admin - Password"
                  variant="filled"
                  color="error"
                />

                <span id="forgot-password"> Forgot password? </span>

                <Button
                  variant="contained"
                  style={{ height: "41px", color: "black", background: "red" }}
                >
                  {" "}
                  Sign In{" "}
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/* Page 2   */}
        <div className="col-lg-5 admin-page-2">
          <div className="row admin-login-background1">
            <div className="col-12  login-box d-flex justify-content-center align-items-center">
              <div className="row   signup-admin-text-field">
                <div className="d-flex justify-content-center signup-field">
                  {" "}
                  <h2 style={{ color: "#e81700" }}> Admin SignUp </h2>{" "}
                </div>
                <TextField
                  style={{ marginTop: "20px" }}
                  id="outlined-basic"
                  label="First name"
                  variant="filled"
                  color="error"
                />

                <TextField
                  style={{ marginTop: "20px" }}
                  id="outlined-basic"
                  label="Sur-name"
                  variant="filled"
                  color="error"
                />

                <TextField
                  style={{ marginTop: "20px" }}
                  id="outlined-basic"
                  label="E-mail"
                  variant="filled"
                  color="error"
                />

                <TextField
                  style={{ marginTop: "20px" }}
                  id="outlined-basic"
                  label="Password"
                  variant="filled"
                  color="error"
                />

                <Button
                  variant="contained"
                  style={{
                    height: "41px",
                    color: "black",
                    background: "red",
                    marginTop: "20px",
                  }}
                >
                  {" "}
                  Sign Up{" "}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
