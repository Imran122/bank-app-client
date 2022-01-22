import React from 'react';
import Card, { UserContext } from '../../context/context';
import './CreateAccount.css';
import '../../css/form.css';
const CreateAccount = () => {
    const [show, setShow] = React.useState(true);
    const [status, setStatus] = React.useState('');
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const ctx = React.useContext(UserContext);

    function validate(field, label) {
        if (!field) {
            setStatus('Error: ' + label);
            setTimeout(() => setStatus(''), 3000);
            return false;
        }
        return true;
    }

    function handleCreate() {
        console.log(name, email, password);
        if (!validate(name, 'name')) return;
        if (!validate(email, 'email')) return;
        if (!validate(password, 'password')) return;
        ctx.users.push({ name, email, password, balance: 100 });
        setShow(false);
    }

    function clearForm() {
        setName('');
        setEmail('');
        setPassword('');
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
                    body={show ? (
                            <div className='form-area'>
                                {/* Account Create Success Message */}
                                <div className="success-message-wrapper text-center">
                                    <h4 className='success-message'>Account Create Success Message</h4>
                                </div>
                                <form>
                                    <div className="form-field-box">
                                        <input type="text" className="" id="name" placeholder="Enter Name *" value={name} onChange={e => setName(e.currentTarget.value)} />
                                        {/* Form Validation Message */}
                                        <p className="form-validation-text text-danger">Form Validation Message</p>
                                    </div>
                                    <div className="form-field-box">
                                        <input type="email" className="" id="email" placeholder="Enter Email *" value={email} onChange={e => setEmail(e.currentTarget.value)} />
                                        {/* Form Validation Message */}
                                        <p className="form-validation-text text-danger">Form Validation Message</p>
                                    </div>
                                    <div className="form-field-box">
                                        <input type="password" className="" id="password" placeholder="Enter Password *" value={password} onChange={e => setPassword(e.currentTarget.value)} />
                                        {/* Form Validation Message */}
                                        <p className="form-validation-text text-danger">Form Validation Message</p>
                                    </div>
                                    <div className="">
                                        <button type="submit" className="submit-btn" onClick={handleCreate}>Create Account</button>
                                    </div>
                                </form>  
                            </div>  
                        ) : (
                            <div className='form'>
                                <h5 className='account-message form-title mb-3'>Success</h5>
                                <button type="submit" className="submit-btn" onClick={clearForm}>Add another account</button>
                            </div>
                        )}
                    />
                </div>
            </div>
        </section>
    );
};

export default CreateAccount;