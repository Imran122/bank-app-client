import React, { useEffect, useState } from 'react';
import Card from '../../context/context';
import './AllData.css';
const AllData = () => {
    //set data in services
    const [users, setUsers] = useState([])
    //fetch data from fajedb json file
    useEffect(() => {
        fetch('http://localhost:5000/userListAll')
            .then(response => response.json())
            .then(data => setUsers(data))
    }, [])
    return (
        <section>
            <div className="container data-wrapper">
                <Card
                    bgcolor=""
                    header="All Data"

                    body={(
                        <div className='table-data shadow table-responsive'>
                            <table class="table-content rounded mb-0 table table-hover table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Password</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map(user =>
                                        <tr>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.password}</td>
                                        </tr>
                                    )}



                                </tbody>
                            </table>
                        </div>
                    )}
                />
            </div>
        </section>
    );
};

export default AllData;


