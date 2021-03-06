import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './Login.css';
import {NavLink} from 'react-router-dom';
import Brain from '../../images/brain.png'
import Logo from '../../images/whirlykoplogo.png'
import LoginBack from '../../images/login-background.png'

function Login() {
  const email = useFormInput("");
  const password = useFormInput("");

  

  const loginSubmit = (e) => {
    e.preventDefault();
    console.log("hii")
    // console.log(email.value);
  };

  return (
    <div className="login-main-body">
   
   <div className="login-left">
    <img className="logo" src={Logo} alt="Logo"/> 
    <div className="login-left_background"><img src={LoginBack} alt=" " /></div>
    
   </div>
    <div className="outer-log">
      
      <div id="container-log">
      {/* <div className="main-content mb-5 ms-5">
          <img src={Brain} className="w-50 ms-5" alt="bg_login" />
        </div> */}
        <div id="form-container-log " className="align-self-center mb-5">
          <h1 className="form-header">WhirlyKop</h1>
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
          <div style={{displa:"flex", flexDirection:"column"}}>
          <div>
            
            </div>
            <div>
            <NavLink
            to="/register"
            style={{ textDecoration: "none", color:"white"}}
            > Register now</NavLink>
            </div>
          </div> 
            <div>
              
              <p className="forgotpassword">
              
                <NavLink
                  to="/forgotPassword"
                  style={{ textDecoration: "none", color:"white" }}
                >
                  Forgot Password?
                </NavLink>
              </p>
            </div>
          </div>
          
        </div>
        
        
        
      </div>
    </div>
    </div>
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
