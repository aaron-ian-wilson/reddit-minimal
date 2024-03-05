import React from 'react';
import '../../styles/Nav.css';
import redditImg from '../../assets/reddit-logo.png';

const Nav = () => {

    const handleClick = () => {
        const temp = document.querySelector('.temp');
        temp.style.display = 'none';

        const nav = document.querySelector('.nav');
        nav.style.marginTop = '0px';
    }

    return (
        <div className='container'>

        <div className='temp'>
            <span>Currently under construction 🚧</span>
            <div className='close'>
                <button onClick={handleClick}>X</button>
            </div>
        </div>
        <div className='nav'>
            <h1>Reddit<span className='highlight'>Minimal</span></h1>
            <img src={redditImg} alt='reddit logo'/>
        </div>
        </div>
    );
};

export default Nav;