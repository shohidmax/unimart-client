import React, { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Spinner from "../../../Element/Spinner";
import auth from "../../../firebase.init";
import GoogleSignin from "../GoogleSignin/GoogleSignin";

const Signup = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  // const handleEmailBlur = (event) => {
  //   setEmail(event.target.value);
  // };
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // const handlePasswordBlur = (event) => {
  //   setPassword(event.target.value);
  // };
  // const handleConfirmPasswordBlur = (event) => {
  //   setConfirmPassword(event.target.value);
  // };
  
  const handleCreateUser = event => {
    event.preventDefault();
    const email = event.target.email.value;
    
    const password = event.target.password.value;
    const confirmpassword = event.target.confirmpassword.value;
    console.log(email, password);
    if (password !== confirmpassword) {
      setError("Please Provide Same password");
      return;
    }
    if (password.length < 6) {
      setError("Minimum 6 caracters Or More");
      return;
    }
    if(loading){
      return <Spinner></Spinner>
    }
    console.log(email, password);
    createUserWithEmailAndPassword(email, password);
  };
  if (user) {
    navigate(from, { replace: true });
  }

  
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4 mt-3 align-items-center border rounded border-primary ">
          <h2 className="mt-3">Please Login</h2>
          <div className="mt-3">




          <form onSubmit={handleCreateUser}>
          <div class="form-group">
             <input type="text" class="form-control" name="name" placeholder="Name"/>
        </div>
        <div class="form-group">
             <input type="email" class="form-control" name="email" placeholder="Email"/>
                            </div>
                            
                          
   <div class="form-group">
     <input type="password" class="form-control" name="password" placeholder="Password"/>
   </div>
   <div class="form-group">
      <input type="password" class="form-control"name="confirmpassword" placeholder="confirm-password"/>
   </div>
   <div class="d-flex flex-row align-items-center justify-content-between">
      <a href="#">Login</a>
       <input type="submit" value="submit"/>
          </div>
       </form>









            {/* <form onSubmit={handleCreateUser}>
              <input
                className="form-text form-control"
                // onBlur={handleEmailBlur} 
                type="email" name="email" placeholder="Your Email" required />{" "}
              <br />
              <input
                className="form-text form-control"
                // onBlur={handlePasswordBlur}
                type="password"
                name="password"
                placeholder="Your Password"
                required
              />{" "}
              <br />
              <input
                className="form-text form-control"
                // onBlur={handleConfirmPasswordBlur}
                type="password"
                name="confirmpassword"
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
              {/* {loading && (
                <div class="spinner-border text-success" role="status">
                  <Spinner></Spinner>
                </div>
              )} */}
              {/* <br />
              <input
                className="form-submit  btn btn-primary w-100 mb-1"
                type="submit"
                value="SignUp"
              />
            </form> */}

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
              <div className="mb-3">{<GoogleSignin></GoogleSignin>}</div>
            </div>
          </div>
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
};

export default Signup;
