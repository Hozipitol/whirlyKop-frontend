import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './Login.css';
import {NavLink} from 'react-router-dom'

function Login() {
  const email = useFormInput("");
  const password = useFormInput("");

  

  const loginSubmit = (e) => {
    e.preventDefault();
    console.log("hii")
    // console.log(email.value);
  };

  return (
    <>
   
    <div className="outer-log">
      <div id="container-log">
        <div id="form-container-log " className="align-self-center mb-5">
          <div id="login-form-shadow">
            <div className="login-input-styles">
              <input
                className="login-box"
                type="text"
                placeholder="E-Mail"
                {...email}
              />
            </div>
            <div>
              <div className="login-input-styles">
                <input
                  className="login-box"
                  type="password"
                  placeholder="Password"
                  {...password}
                />
              </div>
            </div>
            

            
            <div className="login-input-styles login-submit-btn">
              <input
                type="button"
                id="login"
                className="login"
                value={"Login"}
                onClick={loginSubmit}
                // disabled={loading}
              />
            </div>
            
          </div>
          <div style={{display:"flex", justifyContent:"space-between"}}>
          <div>
            Don't Have an Account?
            <NavLink
            to="/register"
            style={{ textDecoration: "none" }}
            > Register Here</NavLink>
            </div> 
            <div>
              
              <p className="forgotpassword">
              
                <NavLink
                  to="/forgotPassword"
                  style={{ textDecoration: "none" }}
                >
                  Forgot Password?
                </NavLink>
              </p>
            </div>
          </div>
          
        </div>
        
        
        
      </div>
    </div>
    </>
  );
}
const useFormInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return {
    value,
    onChange: handleChange,
  };
};
export default Login;
