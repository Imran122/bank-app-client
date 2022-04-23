import React, { useEffect, useState } from "react";
import Card from "../../context/context";
import "./AllData.css";
const AllData = () => {
  //set data in services
  const [users, setUsers] = useState([]);
  //fetch data from fajedb json file
  useEffect(() => {
    fetch("https://bankappsolution.herokuapp.com/userListAll")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <section>
      <div className="container data-wrapper">
        <Card
          bgcolor=""
          header="All Data"
          body={
            <div className="table-data shadow table-responsive">
              <table className="table-content rounded mb-0 table table-hover table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Account Type</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user._id}>
                      <td>{user.displayName}</td>
                      <td>{user.email}</td>
                      <td>{user.accountType}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          }
        />
      </div>
    </section>
  );
};

export default AllData;
