import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../../context/context";
import "../../css/form.css";
import useAuth from "../../hooks/useAuth";
import "./Deposit.css";
const Deposit = () => {
  const [status, setStatus] = useState(false);
  const [deposit, setDeposit] = useState("");
  const {
    user,
    setUser,
    registerUser,
    isLoading,
    authError,
    logUserData,
    setLogUserData,
    setBalance,
  } = useAuth();
  // const [logUserData, setLogUserData] = useState([]);
  //ami logUserData.balance  ai jinish use korlei page auto reload neya nisse
  const [myBalance, setMyBalance] = useState(0);
  //finidng login user by email

  useEffect(() => {
    fetch(`http://localhost:5000/users/${user.email}`)
      .then((response) => response.json())
      .then((data) => setLogUserData(data));
  }, [myBalance]);

  const handleOnType = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newDepositData = { ...deposit };
    newDepositData[field] = value;
    console.log("depoiste amount11", newDepositData);
    if (newDepositData !== null && newDepositData.amount.length > 0) {
      document.getElementById("submitbutton").disabled = false;
    } else {
      document.getElementById("submitbutton").disabled = true;
    }

    setDeposit(newDepositData);
  };

  const handleSubmitData = (e) => {
    e.preventDefault();
    const newDepositeData = { ...deposit };

    if (isNaN(newDepositeData.amount)) {
      alert("Not a number. Please enter number");
      /*  if not number the reload , thats why used return */
      return;
    } else if (newDepositeData.amount < 0) {
      alert("Please enter positive number");
      return;
    }
    let result =
      parseInt(newDepositeData.amount) + parseInt(logUserData.balance);
    //const balanceTotal = document.getElementById("balance-total");
    //balanceTotal.innerText = result;
    console.log("jogfol result", result);
    setStatus(true);
    setMyBalance(result);
    const mydata = {
      email: user.email,
      balance: result,
    };

    axios
      .put(`http://localhost:5000/updatebalance/${user.email}`, mydata)
      .then((response) => {
        console.log("loguser balance", response.data);
        e.target.reset();
      });
  };

  return (
    <section>
      <div className="container">
        <div className="form-wrapper mx-auto">
          <Card
            bgcolor=""
            header="Deposit"
            status={status}
            body={
              <div className="form-area">
                {/* Deposit Success Message */}
                <div className="success-message-wrapper text-center">
                  {status && (
                    <h4 className="success-message">
                      Amount Deposited Successfully{" "}
                    </h4>
                  )}
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="balance-info-text">
                    <h3>Balance:</h3>
                  </div>
                  <div className="balance-info-text">
                    <h3>
                      $<span id="balance-total">{logUserData.balance}</span>
                    </h3>
                  </div>
                </div>
                <div className="balance-info-text">
                  <h3>Deposit Amount</h3>
                </div>
                <form className="form" onSubmit={handleSubmitData}>
                  <div className="mb-4">
                    <input
                      type="text"
                      className=""
                      id="amount"
                      name="amount"
                      placeholder="Enter Value *"
                      onChange={handleOnType}
                    />
                  </div>
                  <div className="">
                    <button
                      type="submit"
                      id="submitbutton"
                      disabled="disabled"
                      className="submit-btn"
                    >
                      Deposit
                    </button>
                  </div>
                </form>
              </div>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Deposit;
