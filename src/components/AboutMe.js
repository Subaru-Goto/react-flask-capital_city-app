import React from 'react';
import { Link } from 'react-router-dom';

const AboutMe = () => {
    return (
        <div>
            <h5>My name is Subaru.</h5>
            <h5>I am just bored.</h5>
            <h5>Thank you very much for your time to visit my app!</h5>
            <Link to='/'>Go Back</Link>
        </div>
    );
};

export default AboutMe;
