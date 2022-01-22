import React, { useState } from 'react';
import Card, { UserContext } from '../../context/context';
import './CreateAccount.css';
import '../../css/form.css';
import { useHistory } from 'react-router-dom';
const CreateAccount = () => {
    const [show, setShow] = useState(false);
    const [status, setStatus] = useState(false);
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [user, setUser] = useState('');
    const ctx = React.useContext(UserContext);
    const history = useHistory()
    function validate(field, label) {
        if (!field) {
            setStatus('Error: ' + label);
            setTimeout(() => setStatus(''), 3000);
            return false;
        }
        return true;
    }
    //change handler when type in input field
    const handleOnType = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newUserData = { ...user };
        newUserData[field] = value;
        setUser(newUserData)


    }
    function handleCreate(e) {
        /*       console.log(name, email, password);
              if (!validate(name, 'name')) return;
              if (!validate(email, 'email')) return;
              if (!validate(password, 'password')) return;
              ctx.users.push({ name, email, password, balance: 100 }); */
        const newUser = { ...user }
        console.log("new user", newUser);
        console.log("submit")
        fetch('http://localhost:5000/userList', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(response => response.json())
            .then(data => {
                if (data.insertedId) {
                    setStatus(true);
                    setShow(false);

                }
            })



        e.preventDefault();
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
                                <form onSubmit={handleCreate}>
                                    <div className="form-field-box">
                                        <input type="text" name="name" id="name" placeholder="Enter Name *" onBlur={handleOnType} />
                                        {/* Form Validation Message */}
                                        <p className="form-validation-text text-danger">Form Validation Message</p>
                                    </div>
                                    <div className="form-field-box">
                                        <input type="email" name="email" id="email" placeholder="Enter Email *" onBlur={handleOnType} />
                                        {/* Form Validation Message */}
                                        <p className="form-validation-text text-danger">Form Validation Message</p>
                                    </div>
                                    <div className="form-field-box">
                                        <input type="password" name="password" id="password" placeholder="Enter Password *" onBlur={handleOnType} />
                                        {/* Form Validation Message */}
                                        <p className="form-validation-text text-danger">Form Validation Message</p>
                                    </div>
                                    <div className="">
                                        <button type="submit" className="submit-btn" >Create Account</button>
                                    </div>
                                </form>
                            </div>
                        ) : (
                            <div className='form'>
                                {status &&
                                    <h5 className='account-message form-title mb-3'>Success</h5>
                                }
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