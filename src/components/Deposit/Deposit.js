import React from 'react';
import Card from '../../context/context';
import './Deposit.css';
import '../../css/form.css';
const Deposit = () => {
    const [show, setShow] = React.useState(true);
    const [status, setStatus] = React.useState('');
    const [deposit, setDeposit] = React.useState('');
    return (
        <section>
            <div className="container">
                <div className="form-wrapper mx-auto">
                    <Card
                        bgcolor=""
                        header="Deposit"
                        status={status}
                        body={(
                            <div className='form-area'>
                                {/* Deposit Success Message */}
                                <div className="success-message-wrapper text-center">
                                    <h4 className='success-message'>Deposit Success Message</h4>
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="balance-info-text">
                                        <h3>Balance:</h3>
                                    </div>
                                    <div className="balance-info-text">
                                        <h3>$10000</h3>
                                    </div>
                                </div>
                                <div className="balance-info-text">
                                    <h3>Deposit Amount</h3>
                                </div>
                                <form className='form'>
                                    <div className="mb-4">
                                        <input type="text" className="" id="name" placeholder="Enter Value *" value={deposit} onChange={e => setDeposit(e.currentTarget.value)} />
                                    </div>
                                    <div className="">
                                        <button type="submit" className="submit-btn">Deposit</button>
                                    </div>
                                </form>
                            </div>
                        )}
                    />
                </div>
            </div>
        </section>
    );
};

export default Deposit;