import React from 'react';
import '../styles/Home.css';
import Search from '../components/Search/Search';
import CardList from '../components/CardList/CardList';
import Topics from '../components/Topics/Topics';

const Home = () => {
    return (
        <div className='body'>
            <div className='sidebar-left'>
                <Topics/>
            </div>
            <div className='content'>
                <Search/>
                <CardList/>
            </div>
            <div className='sidebar-right'>

            </div>
        </div>
    );
};

export default Home;