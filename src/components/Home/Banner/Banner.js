import React from 'react';
import Card from '../../../context/context';

import './Banner.css'
import img from "../../../images/bank.png"
const Banner = () => {
    return (
        <div>
            <Card
                txtcolor="black"
                header="BadBank Landing Module"
                title="Welcome to the bank"
                text="You can move around using the navigation bar."
                body={(<img src={img} className="img-fluid" alt="Responsive image" />)}
            />
        </div>
    );
};

export default Banner;