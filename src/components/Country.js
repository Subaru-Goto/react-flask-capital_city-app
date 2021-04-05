import React from 'react';

const Country = ({ country }) => {
    return (
        <div className='country'>
            <h3>
                Country Code : {country.country_code}
            </h3>
            <p> Country Name : {country.country_name}</p>
            <p> Capital City : {country.capital_city}</p>
        </div>
    );
};

export default Country;
