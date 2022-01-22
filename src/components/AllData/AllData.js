import React from 'react';
import Card from '../../context/context';
import './AllData.css';
const AllData = () => {
    const [show, setShow] = React.useState(true);
    const [status, setStatus] = React.useState('');
    const [deposit, setDeposit] = React.useState('');
    return (
        <section>
            <div className="container data-wrapper">
                <Card
                    bgcolor=""
                    header="All Data"
                    status={status}
                    body={(
                        <div className='table-data shadow table-responsive'>
                            <table class="table-content rounded mb-0 table table-hover table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">Email</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Password</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Jane Doe</td>
                                        <td>john@msn.com</td>
                                        <td>Access123</td>
                                    </tr>
                                    <tr>
                                        <td>Peter Parker</td>
                                        <td>peter@mit.edu</td>
                                        <td> Passcode321</td>
                                    </tr>
                                    <tr>
                                        <td>John Smith</td>
                                        <td>john@msn.com</td>
                                        <td>Letmein33</td>
                                    </tr>
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


