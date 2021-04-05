import React from 'react';
import { useLocation } from 'react-router-dom';
import Button from './Button';
import PropTypes from 'prop-types';

const Header = ({ title }) => {
    const location = useLocation();

    const onClick = () => {
        return alert('You have been banned from this app!')
    };

    return (
        <header className='header'>
            <h1>{title}</h1>
            {location.pathname === '/' && (
            <Button
                color='green'
                text='Login'
                onClick={onClick} />
                )}
        </header>
    );
};

Header.defaultProps= {
    title: 'Capital Search',
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
};

 // CSS in js
 //   style={ headerStyle }
 //   const headerStyle= {
 //       color: 'red',
 //       backgroundColor: 'black',
 //   };

export default Header;
