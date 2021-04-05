import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from'./components/Header';
import Country from './components/Country';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import './App.css';

function App () {
    const [country, setCountry] = useState({});
    const [code, setCode] = useState('');
    const [codeFromClick, setCodeFromClick] = useState('');

    const handleClick = () => {
        setCodeFromClick(code)
    };


    useEffect(() => {
        axios
            .get(`http://localhost:5000/country/${codeFromClick}`)
            .then(res => {
            const data = res.data;
            setCountry(data);
            });
            }, [codeFromClick]);


    const onSubmit = (e) => {

        //prevent a browser reload/refresh
        e.preventDefault()
        if(!code) {
            alert('Please input an country code!')
            return
        }

        // clear form
        setCode('')

    };


      return ( <Router>
        <div className="container">
            <Header title={'Capital Search'} />

            <Route path='/' exact render={(props) => (
                 <>
                    <form className='add-form' onSubmit={onSubmit}>
                        <div className='form-control'>
                            <label>Search Capital City By Country Code</label>
                            <input
                                type='text'
                                placeholder='Please input an ISO 2digits country code (eg. JP)'
                                value={code}
                                name='country_code'
                                onChange={(e) => setCode(e.target.value)}
                            />
                        </div>

                        <input type='submit'
                               value='Search'
                               onClick={handleClick}
                               className='btn btn-block'
                        />
                    </form>
                    <Country country={country}/>
                 </>

            )} />
            <Route path='/about_me' component={AboutMe} />
            <Footer />
        </div>
        </Router>
      );
}

export default App;

