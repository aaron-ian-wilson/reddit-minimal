import React from 'react';

const Vote = (props) => {
    return (
        <div className='votes'>
            <div className='upvotes'>
                <img src='/arrow-up.png' alt='arrow up'/>
            </div>
            {props.score}
            <div className='downvotes'>
                <img src='/down-arrow.png' alt='arrow down'/>
            </div>
        </div>
    );
};

export default Vote;