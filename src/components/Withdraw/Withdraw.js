import React from 'react';
import Card from '../../context/context';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import './Withdraw.css'
const Withdraw = () => {
    const [show, setShow] = React.useState(true);
    const [status, setStatus] = React.useState('');
    const [deposit, setDeposit] = React.useState('');
    return (
        <div>
            <Navbar></Navbar>
            <Card
                bgcolor="primary"
                header="Deposit"
                status={status}
                body={(

                    <>
                        <h4>Withdraw Amount</h4><br />
                        <input type="input" className="form-control" id="name" placeholder="Enter nvalue" value={deposit} onChange={e => setDeposit(e.currentTarget.value)} /><br />


                        <button type="submit" className="btn btn-light" >Withdraw</button>
                    </>
                )}

            />
            <Footer></Footer>
        </div>
    );
};

export default Withdraw;