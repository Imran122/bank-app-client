import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Navbar = () => {
    const activeStyle = {

        color: "#00aa55"

    }
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
                    <label htmlFor="check-btn" className="nav-icon">
                        <div></div>
                        <div></div>
                        <div></div>
                    </label>

                    {/* MAIN MENU  */}
                    <div className="main-menu ">
                        <ul className="text-center text-lg-end ">
                            <li className="d-lg-inline-block">
                                <NavLink to='/home' className="d-inline-block " activeStyle={activeStyle} >Home</NavLink>
                                {/* nav item hover pop up description  */}
                                <div className="page-description">
                                    <p>This is home. Here is a welcome message of the badbank.</p>
                                </div>
                            </li>
                            <li className="d-lg-inline-block">
                                <NavLink to='/create-account' className="d-inline-block" activeStyle={activeStyle}>Create Account</NavLink>
                                {/* nav item hover pop up description  */}
                                <div className="page-description">
                                    <p>It is create account page where you can create account for a user.</p>
                                </div>
                            </li>
                            <li className="d-lg-inline-block">
                                <NavLink to='/deposit' className="d-inline-block" activeStyle={activeStyle}>Deposit</NavLink>
                                {/* nav item hover pop up description  */}
                                <div className="page-description">
                                    <p>It is deposit page where you can deposit money in the bank.</p>
                                </div>
                            </li>
                            <li className="d-lg-inline-block">
                                <NavLink to='/withdraw' className="d-inline-block" activeStyle={activeStyle}>Withdraw</NavLink>
                                {/* nav item hover pop up description  */}
                                <div className="page-description">
                                    <p>It is Withdraw page where you can Withdraw money from the bank.</p>
                                </div>
                            </li>
                            <li className="d-lg-inline-block">
                                <NavLink to='/allData' className="d-inline-block" activeStyle={activeStyle}>All Data</NavLink>
                                {/* nav item hover pop up description  */}
                                <div className="page-description">
                                    <p>It is all data page where you can see all the user`s data presented.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;