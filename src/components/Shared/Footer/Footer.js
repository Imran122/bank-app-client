import React from 'react';
import './Footer.css';
import footer_logo from '../../../images/logo.png';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer-content">
                    <div className="footer-logo text-center">
                        <img src={footer_logo} alt="logo" />
                        <h2 className='footer-title mt-3'>Bad Bank</h2>
                    </div>
                </div>
                <div className="copyright-text text-center mt-3">
                    <p>Copyright &copy; 2022 All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;