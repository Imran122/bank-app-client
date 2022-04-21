import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Card from "../../context/context";
import "../../css/form.css";
import useAuth from "../../hooks/useAuth";
import "./CreateAccount.css";

const CreateAccount = () => {
  const [show, setShow] = useState(true);
  const [status, setStatus] = useState(false);
  const [registerData, setRegisterData] = useState({});
  // const [user, setUser] = useState('');
  const history = useHistory();
  const {
    user,
    setUser,
    registerUser,
    isLoading,
    authError,
    balance,
    setBalance,
  } = useAuth();

  const handleOnType = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newUserData = { ...registerData };
    newUserData[field] = value;
    //console.log(newUserData.name.length);
    if (newUserData !== null && value.length > 0) {
      document.getElementById("submitbutton").disabled = false;
    } else {
      document.getElementById("submitbutton").disabled = true;
    }

    setRegisterData(newUserData);
  };

  function handleCreate(e) {
    const newUser = { ...registerData, balance };
    console.log(newUser);
    if (newUser.name === undefined || newUser.name === "") {
      alert("Please enter name");
      e.preventDefault();
    } else if (newUser.email === undefined || newUser.email === "") {
      alert("Please enter email");
      e.preventDefault();
    } else if (newUser.password === undefined || newUser.password === "") {
      alert("please enter password");
      e.preventDefault();
    } else if (newUser.password.length <= 8) {
      alert("password must be 8 length");
      e.preventDefault();
    } else {
      //submitttingconsole.log(loginData.email, loginData.password)
      registerUser(
        newUser.email,
        newUser.password,
        newUser.name,
        newUser.balance,
        history
      );

      e.preventDefault();
      /*   fetch('http://localhost:5000/userList', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newUser)
            }) 
            .then((response) => response.json())
               .then((data) => {
          if (data.insertedId) {
            setStatus(true);
            setShow(false);
          }
        });
            
            */
    }
  }

  function clearForm(e) {
    setUser("");
    setShow(true);
  }
  return (
    <section>
      <div className="container">
        <div className="form-wrapper mx-auto">
          <Card
            bgcolor=""
            header="Create Account"
            status={status}
            body={
              show ? (
                <div className="form-area">
                  {/* Account Create Success Message */}
                  <div className="success-message-wrapper text-center">
                    {/*  <h4 className='success-message'>Account Create Success Message</h4> */}
                  </div>
                  <form onSubmit={handleCreate}>
                    <div className="form-field-box">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Enter Name *"
                        onChange={handleOnType}
                      />
                      {/* Form Validation Message */}
                      <p className="form-validation-text text-danger">
                        Form Validation Message
                      </p>
                    </div>
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
                    <div className="form-field-box">
                      <input
                        type="password"
                        name="password2"
                        id="password2"
                        placeholder="Re-Enter Password *"
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
                        Create Account
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="form">
                  {status && (
                    <h5 className="account-message form-title mb-3">Success</h5>
                  )}
                  <button
                    type="submit"
                    className="submit-btn"
                    onClick={clearForm}
                  >
                    Add another account
                  </button>
                </div>
              )
            }
          />
        </div>
      </div>
    </section>
  );
};

export default CreateAccount;
