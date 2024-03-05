import React from 'react';
import '../../styles/Nav.css';
import redditImg from '../../assets/reddit-logo.png';

const Nav = () => {
    return (
        <div className='nav'>
            <h1>Reddit<span className='highlight'>Minimal</span></h1>
            <img src={redditImg} alt='reddit logo'/>
        </div>
    );
};

export default Nav;