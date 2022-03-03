import React, {useState} from 'react';
import './Register.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import DatePicker from "react-date-picker";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

function Register() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    cpassword: "",
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    country: "",
    state: "",
    phone: "",
    organization: "",
  });
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const selectDob = (val) => {
    console.log("datepicked 📅", val);
    setUser({ ...user, dob: val });
  };

  const selectCountry = (val) => {
    setUser({ ...user, country: val });
  };

  const selectState = (val) => {
    setUser({ ...user, state: val });
  };

  const inputPhone = (val) => {
    setUser({ ...user, phone: val });
  };

  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }
  }

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [snackBarOpen, setSnackBarOpen] = useState(false);
  return (
    <div id="registration-container" className="row">
    
      <div className=" p-5 col-md-5 sizeing-hanreey container">
        <div id="registration-form-container">
          <form className="register-form" id="registerForm">
            <div id="register-form-shadow">
              <br />
              {/* <Select options={options} value={valuee} onChange={changeHandler} /> */}
              <div className="register-input-styles register-input-width ">
                {/* <label className="Rlabelcontainer" htmlFor="name">First Name</label> */}
                <input
                  className="register-box register-inline-box "
                  type="text"
                  value={user.firstName}
                  onChange={handleInputs}
                  placeholder="First Name"
                  name="firstName"
                  id="firstName"
                  required
                />
                <input
                  className="register-box register-inline-box register-right-box"
                  type="text"
                  value={user.lastName}
                  onChange={handleInputs}
                  placeholder="Last Name"
                  name="lastName"
                  id="lastName"
                  required
                />
              </div>
              <div className="register-input-styles ">
                {/* <label className="box inline-box" htmlFor="email">Email ID</label> */}
                <input
                  className="register-box register-single-box"
                  type="text"
                  value={user.email}
                  onChange={handleInputs}
                  name="email"
                  // id='email'
                  placeholder="E-Mail"
                  required
                />
              </div>
              <div className="register-input-styles register-input-width">
                {/* <label className="Rlabelcontainer" htmlFor="password">Password</label> */}
                <input
                  className="register-box register-inline-box"
                  type="password"
                  value={user.password}
                  onChange={handleInputs}
                  name="password"
                  placeholder="Password"
                  id="password"
                  required
                />

                <input
                  className="register-box register-inline-box register-right-box"
                  type="password"
                  value={user.cpassword}
                  onChange={handleInputs}
                  name="cpassword"
                  placeholder="Confirm Password"
                  id="cpassword"
                  required
                />
              </div>

              <div className="register-input-styles register-input-width">
                <CountryDropdown
                  defaultOptionLabel="Select Country"
                  value={user.country}
                  onChange={selectCountry}
                  className="register-box register-inline-box register-drop-down "
                />
                <RegionDropdown
                  blankOptionLabel="Select State"
                  defaultOptionLabel="Select State"
                  country={user.country}
                  value={user.state}
                  onChange={selectState}
                  className="register-box register-inline-box register-drop-down register-right-box"
                />
              </div>

              <div className="register-input-styles ">
                {/* <label className="box inline-box" htmlFor="email">Email ID</label> */}
                <input
                  className="register-box register-single-box"
                  type="text"
                  value={user.organization}
                  onChange={handleInputs}
                  name="organization"
                  id="organization"
                  placeholder="Organization"
                  required
                />
              </div>
              <div className="register-input-styles">
                <PhoneInput
                  className="register-box register-single-box  phoneNum"
                  name="phone"
                  id="phone"
                  placeholder="Enter phone number"
                  value={user.phone}
                  onChange={inputPhone}
                />
              </div>

              <div className="register-input-styles register-single-width">
                <label className="register-box register-single-box">

                  <DatePicker
                    className='datepick'
                    format="y-MM-dd"
                    name="dob"
                    value={user.dob}
                    onChange={selectDob}
                    id="datepicker"
                    
                  />
                </label>

                
              </div>
              <div className="register-input-styles">
                <select
                  className="register-box  register-single-box register-drop-down register-single-width  "
                  id="gender"
                  name="gender"
                  onChange={handleInputs}
                >
                  <option value="gender">Select Gender</option>
                  <option value="MALE">Male</option>
                  <option value="FEMALE">Female</option>
                  <option value="OTHERS">Others</option>
                </select>
                <br />
              </div>

              <div className="register-input-styles register-submit-btn">
                <input
                  id="submitDetails"
                  type="button"
                  style={{backgroundColor:"#0d98ba"}}
                  className="register-form-submit"
                  // onClick={handleRegister}
                  value="Register"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
