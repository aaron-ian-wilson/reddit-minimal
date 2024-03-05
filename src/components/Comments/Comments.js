import React, { useState } from 'react';
import '../../styles/Comments.css';

const Comments = ({ comment }) => {
    const [commentCount, setCommentCount] = useState(1);

    const showMore = () => {
        setCommentCount(commentCount + 1);
    }

    const showLess = () => {
        setCommentCount(commentCount - 1);
    }

    return (
        <div className='comment-list'>
            {comment.slice(0, commentCount).map((comment, index) => (
                <div key={index}>
                    <span className='highlight'>{comment.author}</span>
                    <p>{comment.body}</p>
                    {comment.replies.map((reply, index) => (
                        <div key={index} className='reply'>
                            <span className='highlight'>{reply.author}</span>
                            <p>{reply.body}</p>
                        </div>
                    ))}
                </div>
            ))}
            <div className='buttons-container'>
                {commentCount >= 1 && (
                    <button onClick={showMore}><img src='/plus.png'/></button>
                )}
                {commentCount >= 2 && (
                    <button onClick={showLess}><img src='/minus.png'/></button>
                )}
            </div>
    </div>
    );
};

export default Comments;