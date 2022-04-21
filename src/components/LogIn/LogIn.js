import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./LogIn.css";
const LogIn = () => {
  const [show, setShow] = useState(true);
  const [status, setStatus] = useState(false);
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, isLoading, authError } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const handleOnType = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newUserData = { ...loginData };
    newUserData[field] = value;
    //console.log(newUserData.name.length);
    if (newUserData !== null && value.length > 0) {
      document.getElementById("submitbutton").disabled = false;
    } else {
      document.getElementById("submitbutton").disabled = true;
    }

    setLoginData(newUserData);
  };

  //login work
  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, history);

    e.preventDefault();
  };
  return (
    <section>
      <div className="container">
        <div className="form-wrapper mx-auto">
          <div className="form-area">
            {/* Account Create Success Message */}
            <div className="success-message-wrapper text-center">
              {/*  <h4 className='success-message'>Account Create Success Message</h4> */}
            </div>
            <form onSubmit={handleLoginSubmit}>
              <div className="form-field-box">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Email *"
                  onChange={handleOnType}
                />
                {/* Form Validation Message */}
                <p className="form-validation-text text-danger">
                  Form Validation Message
                </p>
              </div>
              <div className="form-field-box">
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter Password *"
                  onChange={handleOnType}
                />
                {/* Form Validation Message */}
                <p className="form-validation-text text-danger">
                  Form Validation Message
                </p>
              </div>
              <div className="">
                <button
                  type="submit"
                  id="submitbutton"
                  className="submit-btn"
                  disabled="disabled"
                >
                  Log In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogIn;
