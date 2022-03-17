import React, {useState} from 'react';
import './ForgotPassword.css'

function ForgotPassword() {
  const email = useFormInput("");
  return (
    <div className="outer-otp">
    <div id="container-otp">
      <div className="main-content-otp">
        <h1>Forgot Password</h1>
        <div className="div-border"></div>
      </div>
      <div id="form-otp">
        <div id="otp-form-shadow">
          <div className="otp-input-styles">
            {/* <label className="labelcontainer" >Email ID</label> */}
            <input
              className="otp-box"
              type="text"
              placeholder="E-Mail"
              {...email}
            />
          </div>
          
          <br />
          <div className="otp-input-styles otp-submit-btn">
            {/* <NavLink to={{
            pathname:'/confirm',
            state : email,
          }}> */}
            <input
              type="button"
              id="otpbtn"
              className="otpbtn"
              value={ "Send OTP"}
              
            />
            {/* </NavLink> */}
          </div>
        </div>
      </div>
    </div>
  </div>
  )
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

export default ForgotPassword