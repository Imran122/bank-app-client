import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../../context/context";
import useAuth from "../../hooks/useAuth";
import "./Transfer.css";
const Transfer = () => {
  const [status, setStatus] = useState(false);
  const [transfer, setTransfer] = useState([]);
  const [balanceTransferPerson, setBalanceTransferPerson] = useState([]);
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

    const newTransferData = { ...transfer };
    newTransferData[field] = value;

    setTransfer(newTransferData);
  };

  //find email where i have to transfer
  //it is depend on transfer. when transfer then it will load the input email data
  useEffect(() => {
    fetch(`http://localhost:5000/users/${transfer.email}`)
      .then((response) => response.json())
      .then((data) => setBalanceTransferPerson(data));
  }, [transfer]);

  //submit data
  const handleSubmitData = (e) => {
    e.preventDefault();
    const newTransfereData = { ...transfer };
    console.log("new transfer data", newTransfereData);
    if (isNaN(newTransfereData.amount)) {
      alert("Not a number. Please enter number");
      /*  if not number the reload , thats why used return */
      return;
    } else if (newTransfereData.amount > parseInt(logUserData.balance)) {
      alert("Please enter below amount of balance");
      return;
    }
    let result =
      parseInt(logUserData.balance) - parseInt(newTransfereData.amount);
    const balanceTotal = document.getElementById("balance-total");
    balanceTotal.innerText = result;
    setStatus(true);

    //add balance to the user account

    // add balance to the given input email user
    let addBalanceToPerson =
      parseInt(balanceTransferPerson.balance) +
      parseInt(newTransfereData.amount);
    setMyBalance(result);
    console.log("tranfer total balance", addBalanceToPerson);

    const mydata = {
      email: user.email,
      balance: result,
    };
    const updateData = {
      email: balanceTransferPerson.email,
      balance: addBalanceToPerson,
    };

    axios
      .put(`http://localhost:5000/transfer/${user.email}`, mydata)
      .then((response) => {
        // calling the deposite api to deposit money into the input mail address
        axios
          .put(
            `http://localhost:5000/updatebalance/${balanceTransferPerson.email}`,
            updateData
          )
          .then((response) => {
            console.log("loguser balance", response.data);
            e.target.reset();
          });
        e.target.reset();
      });
  };
  return (
    <section>
      <div className="container">
        <div className="form-wrapper mx-auto">
          <Card
            bgcolor=""
            header="Transfer"
            status={status}
            body={
              <div className="form-area">
                {/* Withdeaw Success Message */}
                <div className="success-message-wrapper text-center">
                  {status && (
                    <h4 className="success-message">
                      Amount transfer Successfully{" "}
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
                  <h3>Transfer Balance</h3>
                </div>
                <form className="form" onSubmit={handleSubmitData}>
                  <div className="mb-4">
                    <input
                      type="email"
                      className=""
                      id="email"
                      name="email"
                      placeholder="Enter the email to transfer balance*"
                      onChange={handleOnType}
                    />
                  </div>
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
                      className="submit-btn"
                    >
                      Transfer
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

export default Transfer;
