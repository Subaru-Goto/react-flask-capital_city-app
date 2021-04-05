import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {

    const location = useLocation();

    return (
        <footer>
            <p>Made just for fun</p>
            {location.pathname !== '/about_me' && (
                <Link to='/about_me'>About Me</Link>
                )}
        </footer>
    );
};

export default Footer;
