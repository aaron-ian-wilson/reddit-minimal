import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../Card/Card';
import { selectPosts } from '../../slices/reddit';
import { popular } from '../../actions/popular-posts';

const CardList = () => {
    const posts = useSelector(selectPosts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(popular()); // Fetch popular posts from reddits API
    }, [dispatch]);

    return (
        <div className='card-list'>
            {posts.map(data => <Card key={data.id} data={data}/>)}
        </div>
    );
};

export default CardList;

