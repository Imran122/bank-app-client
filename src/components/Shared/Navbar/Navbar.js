import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <header className=''>
            <div className="container">
                <nav className='d-flex align-items-center justify-content-between'>
                    {/* Logo */}
                    <div className="logo">
                        <Link to="/">
                            <h4>Bad Bank</h4>
                        </Link>
                    </div>

                    {/* Nav Icon */}
                    <input type="checkbox" name="" id="check-btn" />
                    <label for="check-btn" class="nav-icon">
                        <div></div>
                        <div></div>
                        <div></div>
                    </label>

                    {/* MAIN MENU  */} 
                    <div className="main-menu d-flex align-items-center justify-content-center flex-lg-column">
                        <ul className="text-center text-lg-end">
                            <li className="d-lg-inline-block">
                                <NavLink to='/' className="d-inline-block">Home</NavLink>
                            </li>
                            <li className="d-lg-inline-block">
                                <NavLink to='/create-account' className="d-inline-block">Create Account</NavLink>
                            </li>
                            <li className="d-lg-inline-block">
                                <NavLink to='/deposit' className="d-inline-block">Deposit</NavLink>
                            </li>
                            <li className="d-lg-inline-block">
                                <NavLink to='/withdraw' className="d-inline-block">Withdraw</NavLink>
                            </li>
                            <li className="d-lg-inline-block">
                                <NavLink to='/allData' className="d-inline-block">All Data</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;