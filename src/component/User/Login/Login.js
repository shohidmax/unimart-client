import React, { useRef, useState } from "react";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import GoogleSignin from "../GoogleSignin/GoogleSignin";

const Login = () => {
  const emailRe = useRef('');
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }
    
    if (user) {
        navigate(from, {replace: true});
    }

    const handleUserSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }
    const resetPassword = async () => {
        const email = emailRe.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Password Reset send');
        }
        else{
            toast('please enter your email address');
        }
    }



  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4 mt-3 mb-2 border rounded border-primary ">
          <h2 className="mt2">Please Login</h2>
          <div className="mt-3">
            <form  onSubmit={handleUserSignIn}>
              <input className="form-text form-control"  ref={emailRe}   onBlur={handleEmailBlur} type="email" name="email" placeholder='Your Email' required />{" "}
              <br />
              <input className="form-text form-control" onBlur={handlePasswordBlur} type="password" name="password" placeholder='Your Password' required  />{" "}
              <br />
              <p style={{ color: 'red' }}>{ error?.message ? (<div><p>please Provide Valid Information</p></div>):(<div></div>)
                    
                    }</p>
                    <br/>
                    {
                        loading && <div class="spinner-border text-success" role="status">
                        <span class="visually-hidden">Loading...</span>
                      </div>
                    } 
                    <br/>

              <input className="form-submit  btn btn-primary w-100 mb-2" type="submit" value="Login"/>
            </form>
            <div>
                <p>Forget password ?  <button className="btn btn-link" onClick={resetPassword}> Reset Password</button></p>
                <h5>Unimart ? <Link className="btn btn-link" to="/signUp">Create an account</Link></h5>
            </div>
            <div className="mb-2"> 
              <div className='mt-1 mb-1'><h2>Or</h2>
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

export default Login;
