import React, { useState } from 'react'
import "./Login.css";
import { auth } from "./Firebase";
// import { signInWithEmailAndPassword, createUserWithEmailAndPassword }
// from "firebase/auth ";
import { Link, useNavigate } from 'react-router-dom';


function Login() {
    // const [email, setEmail] = useState("");
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");

    const navigate = useNavigate();
    
    const signIn = (e) => {
        e.preventDefault();
        
        auth.signInWithEmailAndPassword(email, password)
          .then(auth => {
            if (auth) navigate("/");
          })
          .catch((error) => {
            alert(error.message);
          });
    }

const register = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email, password)
    
      .then((auth) => {
        navigate("/");
      })
      .catch((error) => {
        alert(error.message);
      });
}
      return (
        <div className="login">
          <Link to="/">
            <img
              className="login__logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
            />
          </Link>
          <div className="login__container">
            <h1> Sign-in </h1>
            <form>
              <h5>E-mail</h5>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <h5>password</h5>
              <input
                type="password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
              />
              <h5>password</h5>

              <button
                type="submit"
                onClick={signIn}
                className="login__signInButton"
              >
                {" "}
                Sign In{" "}
              </button>
            </form>

            <p>
              BY signing-in you agree to the AMAZON FAKE CLONE Conditions of use
              sale. please see our privacy Notice, our cookies Notice and our
              Intereset-Based Ads Nptice.
            </p>
            <button onClick={register} className="login__registerButton">
              create your Amazon Account
            </button>
          </div>
        </div>
      );
    };

export default Login