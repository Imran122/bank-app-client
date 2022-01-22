import React from 'react';
import Card from '../../../context/context';
import './Banner.css';
import img from "../../../images/banner/banner-img.png";
const Banner = () => {
    return (
        <section className='banner-section'>
            <div className="container banner-wrapper">
                <Card
                    txtcolor="white"
                    header="Bad Bank Landing Module"
                    title="Welcome to the bank"
                    text="You can move around using the navigation bar."
                    body={( <div className='banner-img d-flex justify-content-center align-items-center'>
                        <img src={img} alt='bank' className='img-fluid' />
                    </div>
                    )}
                />
            </div>
        </section>
    );
};

export default Banner;