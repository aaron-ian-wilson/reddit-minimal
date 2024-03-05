import React, { useState, useRef } from 'react';
import '../../styles/Topics.css';
import { NavLink, createSearchParams, useNavigate } from 'react-router-dom';

const Topics = () => {
    const [isVisible, setIsVisible] = useState({
        gaming: false,
        sports: false,
        business: false,
        crypto: false,
        television: false,
        celebrity: false
    });
    const [topic, setTopic] = useState('');

    const handleClick = (category) => {
        setIsVisible(prevState => ({
            ...prevState,
            [category]: !prevState[category]
        }));
    };

    const selectSubtopic = (subtopic) => {
        setTopic(subtopic);
    };

    const navigate = useNavigate();
    const topicHandler = (e) => {
        e.preventDefault();

        const topicQuery = {
            name: topic,
        }

        const query = createSearchParams(topicQuery);

        navigate({
            pathname: '/topic',
            search: `?${query}`
        });
    };

    return (
        <div className='topics-container'>
            <div className='popular'>
                <NavLink className='nav' to='/'><button className='head-button'><img src='/popular.png' alt='popular'/>Popular</button></NavLink>
            </div>
            <div className='topics'>
                <div className='header'>
                    Topics
                </div>
                <div className='gaming'>
                    <button className='head-button' onClick={() => handleClick('gaming')}><img src='/controller.png' alt='controller'/>Gaming
                        <div className='reveal'>
                            <img src='/reveal.png' alt='reveal'/>
                        </div>
                    </button>
                    {isVisible.gaming && (
                        <form onSubmit={topicHandler}>
                            <div className='sub-topics'>
                                <button onClick={() => selectSubtopic('Valheim')}>Valheim</button>
                                <button onClick={() => selectSubtopic('GenshinImpact')}>Genshin Impact</button>
                                <button onClick={() => selectSubtopic('Minecraft')}>Minecraft</button>
                                <button onClick={() => selectSubtopic('Pokimane')}>Pokimane</button>
                                <button onClick={() => selectSubtopic('Halo Infinite')}>Halo Infinite</button>
                                <button onClick={() => selectSubtopic('Call of Duty: Warzone')}>Call of Duty: Warzone</button>
                                <button onClick={() => selectSubtopic('Path of Exile')}>Path of Exile</button>
                                <button onClick={() => selectSubtopic('Hollow Knight: Silksong')}>Hollow Knight: Silksong</button>
                                <button onClick={() => selectSubtopic('Escape from Tarkov')}>Escape from Tarkov</button>
                                <button onClick={() => selectSubtopic('Watch Dogs: Legion')}>Watch Dogs: Legion</button>
                            </div>
                        </form>
                    )}
                </div>
                <div className='sports'>
                    <button className='head-button' onClick={() => handleClick('sports')}><img src='/volleyball.png' alt='volleyball'/>Sports
                        <div className='reveal'>
                            <img src='/reveal.png' alt='reveal'/>
                        </div>
                    </button>
                    {isVisible.sports && (
                        <form onSubmit={topicHandler}>
                            <div className='sub-topics'>
                                <button onClick={() => selectSubtopic('NFL')}>NFL</button>
                                <button onClick={() => selectSubtopic('NBA')}>NBA</button>
                                <button onClick={() => selectSubtopic('Megan Anderson')}>Megan Anderson</button>
                                <button onClick={() => selectSubtopic('Atlanta Hawks')}>Atlanta Hawks</button>
                                <button onClick={() => selectSubtopic('Los Angeles Lakers')}>Los Angeles Lakers</button>
                                <button onClick={() => selectSubtopic('Boston Celtics')}>Boston Celtics</button>
                                <button onClick={() => selectSubtopic('Arsenal F.C.')}>Arsenal F.C.</button>
                                <button onClick={() => selectSubtopic('Philadelphia 76ers')}>Philadelphia 76ers</button>
                                <button onClick={() => selectSubtopic('Premier League')}>Premier League</button>
                                <button onClick={() => selectSubtopic('UFC')}>UFC</button>
                            </div>
                        </form>
                    )}
                </div>
                <div className='business'>
                    <button className='head-button' onClick={() => handleClick('business')}><img src='/handshake.png' alt='handshake'/>Business
                        <div className='reveal'>
                            <img src='/reveal.png' alt='reveal'/>
                        </div>
                    </button>
                    {isVisible.business && (
                        <form onSubmit={topicHandler}>
                            <div className='sub-topics'>
                                <button onClick={() => selectSubtopic('GameStop')}>GameStop</button>
                                <button onClick={() => selectSubtopic('Moderna')}>Moderna</button>
                                <button onClick={() => selectSubtopic('Pfizer')}>Pfizer</button>
                                <button onClick={() => selectSubtopic('Johnson & Johnson')}>Johnson & Johnson</button>
                                <button onClick={() => selectSubtopic('AstraZeneca')}>AstraZeneca</button>
                                <button onClick={() => selectSubtopic('Walgreens')}>Walgreens</button>
                                <button onClick={() => selectSubtopic('Best Buy')}>Best Buy</button>
                                <button onClick={() => selectSubtopic('Novavax')}>Novavax</button>
                                <button onClick={() => selectSubtopic('SpaceX')}>SpaceX</button>
                                <button onClick={() => selectSubtopic('Tesla')}>Tesla</button>
                            </div>
                        </form>
                    )}
                </div>
                <div className='crypto'>
                    <button className='head-button' onClick={() => handleClick('crypto')}><img src='/bitcoin.png' alt='crypto bitcoin'/>Crypto
                        <div className='reveal'>
                            <img src='/reveal.png' alt='reveal'/>
                        </div>
                    </button>
                    {isVisible.crypto && (
                        <form onSubmit={topicHandler}>
                            <div className='sub-topics'>
                                <button onClick={() => selectSubtopic('Cardano')}>Cardano</button>
                                <button onClick={() => selectSubtopic('Dogecoin')}>Dogecoin</button>
                                <button onClick={() => selectSubtopic('Algorand')}>Algorand</button>
                                <button onClick={() => selectSubtopic('Bitcoin')}>Bitcoin</button>
                                <button onClick={() => selectSubtopic('Litecoin')}>Litecoin</button>
                                <button onClick={() => selectSubtopic('Basic Attention Token')}>Basic Attention Token</button>
                                <button onClick={() => selectSubtopic('Bitcoin Cash')}>Bitcoin Cash</button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Topics;