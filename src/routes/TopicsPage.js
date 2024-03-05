import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Topics from '../components/Topics/Topics';
import Search from '../components/Search/Search';
import Card from '../components/Card/Card';
import { useSearchParams } from 'react-router-dom';
import { selectPosts } from '../slices/reddit';
import { topics } from '../actions/topics';

const TopicsPage = () => {
    const post = useSelector(selectPosts);

    const [searchParams] = useSearchParams();
    const query = searchParams.get('name');

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(topics(query));
    }, [dispatch]);

    return (
        <div className="body">
        <div className="sidebar-left">
            <Topics />
        </div>
        <div className="content">
            <Search />
            {post.map((data, index) => <Card key={index} data={data}/>)}
        </div>
        <div className="sidebar-right">
            
        </div>
    </div>
    );
};

export default TopicsPage;