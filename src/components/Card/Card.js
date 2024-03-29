import React from 'react';
import '../../styles/Card.css';
import { NavLink } from 'react-router-dom';
import Vote from '../Vote/Vote';
import commentImg from '../../assets/comment.png';
import { convertToDecimal, getTimeAgo } from '../../utils/format';

const Card = ({ data, children }) => {
    return (
        <div className='card'>
            <div className='main'>
                <h4>r/<span className='highlight'>{data.subreddit}</span></h4>
                <h2>{data.title}</h2>
                    {data.image.includes('.jpeg') && (
                        <div className='media-container'>
                            <div className='background'></div>
                            <img src={data.image} alt={data.title}/>
                        </div>
                    )}
                    {data.video && (
                        <div className='media-container'>
                            <video controls>
                                <source src={data.video}/>
                            </video>
                        </div>
                    )}
            </div>
            <div className='features'>
                <Vote score={convertToDecimal(data.score)}/>
                <div className='comments'>
                    <NavLink className='nav-link' to={`/post/${data.id}`}>
                        <button>
                            <img src={commentImg} alt='comment'/>{convertToDecimal(data.num_comments)}
                        </button>
                    </NavLink>
                </div>
                <div className='author'>
                    <p>Posted By <span className='highlight'>{data.author}</span></p>
                </div>
                <div className='date'>
                    <p>{getTimeAgo(data.created_utc)}</p>
                </div>
            </div>
            {children}
        </div>
    );
};

export default Card;