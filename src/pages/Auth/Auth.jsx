import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import {useNavigate} from "react-router-dom";
import "./Auth.css";
import logo from "../../../public/stackoverflow-tile.svg";
import AboutAuth from "./AboutAuth";
import { signup,login } from "../../actions/auth";

const Auth = () => {
  
  const [isSignup, setIsSignup] = useState(false);
  const [name, setName]= useState("");
  const [email, setEmail]= useState("");
  const [password, setPassword]= useState("");

  const dispatch= useDispatch();
  const navigate= useNavigate();


  const handleSwitch = () => {
    setIsSignup(!isSignup);
  };

  const handleSubmit=(e)=> {
          e.preventDefault();

          if(!email && !password) {
              alert("Enter email and password");
          }

          if(isSignup)
          {
            if(!name){
              alert("Enter a name to continue");
            }
            dispatch(signup({name, email, password}, navigate));
          }else {

             dispatch(login({email,password}, navigate));
          }
          
  }

  return (
    <section className="auth-section">
      {isSignup && <AboutAuth />}
      <div className="auth-container-2">
        <img
          src={logo}
          alt="stack-logo"
          className="login-logo"
          style={{ width: "40px", height: "40px" }}
        />
        <form onSubmit={handleSubmit}>
          {isSignup && (
            <label htmlFor="username">
              <h4>Display Name</h4>
              <input type="text" name="username" id="username" onChange={(e)=>{setName(e.target.value)}} />
            </label>
          )}
          <label htmlFor="email">
            <h4>Email</h4>
            <input type="email" name="name" id="email" onChange={(e)=>{setEmail(e.target.value)}} />
          </label>
          <label htmlFor="password">
            <div style={{display:"flex", justifyContent: "space-between"}}>
              <h4>Password</h4>
              {!isSignup && <p style={{color: "blue", fontSize: "13px", marginTop: "16px"}}>Forget Password?</p>}
            </div>
            <input type="password" name="password" id="password" onChange={(e)=>{setPassword(e.target.value)}}/>
            {isSignup && (
              <p style={{ color: "#666767", fontSize: "13px" }}>
                Password must contain atleast
                <br /> eight characters including atleast 1<br /> letter and 1
                number.
              </p>
            )}
          </label>
          {isSignup && (
            <label htmlFor="check">
              <input type="checkbox" id="check" />
              <p style={{ fontSize: "13px" }}>
                Opt-in to receive occasional,
                <br />
                product updates, user research invitation,
                <br />
                company and digests.
              </p>
            </label>
            
          )}
          <button type="submit" className="auth-btn">
            {isSignup ? "Signup" : "Login"}
          </button>
          {isSignup && (
            <p style={{ color: "#666767", fontSize: "13px" }}>
              By clicking "Signup", you agree to our&nbsp;
              <span style={{ color: "blue" }}>
                terms of
                <br /> service
              </span>
              ,&nbsp;
              <span style={{ color: "blue" }}>privacy policy</span> and&nbsp;
              <span style={{ color: "blue" }}>cookie policy</span>.
            </p>
          )}
        </form>
        <p>
          {isSignup ? "Already have an account?" : "Don't have an account?"}
          <button
            type="button"
            className="handle-btn-switch"
            onClick={handleSwitch}
          >
            {isSignup ? "Login" : "Signup"}
          </button>
        </p>
      </div>
    </section>
  );
};
export default Auth;
