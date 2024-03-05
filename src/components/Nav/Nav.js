import React from 'react';
import '../../styles/Nav.css';

const Nav = () => {
    return (
        <div className='nav'>
            <h1>Reddit<span className='highlight'>Minimal</span></h1>
            <img src='/reddit-logo.png' alt='reddit logo'/>
        </div>
    );
};

export default Nav;