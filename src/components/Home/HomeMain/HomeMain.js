import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import About from '../About/About';
import Banner from '../Banner/Banner';

const HomeMain = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <About></About>
            <Footer></Footer>
        </div>
    );
};

export default HomeMain;