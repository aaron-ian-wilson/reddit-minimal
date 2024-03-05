import React from 'react';
import '../../styles/Vote.css';
import arrowUpImg from '../../assets/arrow-up.png';
import arrowDownImg from '../../assets/down-arrow.png';

const Vote = (props) => {
    return (
        <div className='votes'>
            <div className='upvotes'>
                <img src={arrowUpImg} alt='arrow up'/>
            </div>
            {props.score}
            <div className='downvotes'>
                <img src={arrowDownImg} alt='arrow down'/>
            </div>
        </div>
    );
};

export default Vote;