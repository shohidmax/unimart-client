import React, { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Spinner from "../../../Element/Spinner";
import auth from "../../../firebase.init";
import GoogleSignin from "../GoogleSignin/GoogleSignin";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPasswordBlur = (event) => {
    setConfirmPassword(event.target.value);
  };
  if (user) {
    navigate(from, { replace: true });
  }
  const handleCreateUser = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("Please Provide Same password");
      return;
    }
    if (password.length < 6) {
      setError("Minimum 6 caracters Or More");
      return;
    }

    createUserWithEmailAndPassword(email, password);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4 mt-3 align-items-center border rounded border-primary ">
          <h2 className="mt-3">Please Login</h2>
          <div className="mt-3">
            <form onSubmit={handleCreateUser}>
              <input
                className="form-text form-control"
                onBlur={handleEmailBlur}
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />{" "}
              <br />
              <input
                className="form-text form-control"
                onBlur={handlePasswordBlur}
                type="password"
                name="password"
                placeholder="Your Password"
                required
              />{" "}
              <br />
              <input
                className="form-text form-control"
                onBlur={handleConfirmPasswordBlur}
                type="password"
                name="confirm-password"
                placeholder="Your Password"
                required
              />{" "}
              <br />
              <p style={{ color: "red" }}>
                {error?.message ? (
                  <div>
                    <p>please Provide Valid Information</p>
                  </div>
                ) : (
                  <></>
                )}
              </p>
              <br />
              {loading && (
                <div class="spinner-border text-success" role="status">
                  <Spinner></Spinner>
                </div>
              )}
              <br />
              <input
                className="form-submit  btn btn-primary w-100 mb-1"
                type="submit"
                value="Login"
              />
            </form>
            <div>
              <p>
                Forget password ?{" "}
                <Link className="btn btn-link" to="/resetPassword">
                  Reset Password
                </Link>
              </p>
              <h5>
                Unimart ?{" "}
                <Link className="btn btn-link" to="/login">
                  Login
                </Link>
              </h5>
            </div>
            <div className="mb-1">
              <div className="mb-2">
                <h2>Or</h2>
              </div>
             <div className="mb-3">
             {<GoogleSignin></GoogleSignin>}

             </div>
            </div>
          </div>
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
};

export default Signup;
