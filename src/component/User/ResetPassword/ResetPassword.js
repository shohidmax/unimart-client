import { sendPasswordResetEmail } from "firebase/auth";
import React, { useRef } from "react";
import { Toast } from "react-bootstrap";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const resetPassword = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4 mt-3 border border-primary ">
          <h2>Password Reset</h2>
          <div className="mt-3">
            <form>
              <input
                name="email"
               
                className="form-text form-control"
                type="email"
                placeholder="Email address"
              />{" "}
              <br />
              <input
                className="form-submit  btn btn-primary w-100 mb-2"
                
                type="submit"
                value="Login"
              />
            </form>
          </div>
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
};

export default resetPassword;
