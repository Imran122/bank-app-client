import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../../context/context";
import "../../css/form.css";
import useAuth from "../../hooks/useAuth";
import "./Withdraw.css";
const Withdraw = () => {
  const [status, setStatus] = useState(false);
  const [withdraw, setwithdraw] = useState("");

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
    fetch(`https://bankappsolution.herokuapp.com/users/${user.email}`)
      .then((response) => response.json())
      .then((data) => setLogUserData(data));
  }, [myBalance]);

  const handleOnType = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newWithdrawData = { ...withdraw };
    newWithdrawData[field] = value;

    if (newWithdrawData !== null && newWithdrawData.amount.length > 0) {
      document.getElementById("submitbutton").disabled = false;
    } else {
      document.getElementById("submitbutton").disabled = true;
    }

    setwithdraw(newWithdrawData);
  };

  const handleSubmitData = (e) => {
    e.preventDefault();
    const newDepositeData = { ...withdraw };
    if (isNaN(newDepositeData.amount)) {
      alert("Not a number. Please enter number");
      /*  if not number the reload , thats why used return */
      return;
    } else if (newDepositeData.amount > parseInt(logUserData.balance)) {
      alert("Please enter below amount of balance");
      return;
    }
    let result =
      parseInt(logUserData.balance) - parseInt(newDepositeData.amount);
    const balanceTotal = document.getElementById("balance-total");
    balanceTotal.innerText = result;
    setStatus(true);

    setMyBalance(result);
    const mydata = {
      email: user.email,
      balance: result,
    };

    axios
      .put(
        `https://bankappsolution.herokuapp.com/withdraw/${user.email}`,
        mydata
      )
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
            header="Withdraw"
            status={status}
            body={
              <div className="form-area">
                {/* Withdeaw Success Message */}
                <div className="success-message-wrapper text-center">
                  {status && (
                    <h4 className="success-message">
                      Amount withdraw Successfully{" "}
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
                  <h3>Withdraw Amount</h3>
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
                      Withdraw
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

export default Withdraw;
