import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Topics from '../components/Topics/Topics';
import Search from '../components/Search/Search';
import Card from '../components/Card/Card';
import { search } from '../actions/search-posts';
import { selectPosts, selectStatus } from '../slices/reddit';
import { useSearchParams } from 'react-router-dom';

const SearchPage = () => {
    const post = useSelector(selectPosts);
    const status = useSelector(selectStatus);

    const [searchParams] = useSearchParams();

    const query = searchParams.get('name');

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(search(query));
    }, [dispatch, query]);

    return (
        <div className="body">
        <div className="sidebar-1">
            <Topics />
        </div>
        <div className="content">
            <Search />
            {status === 'pending' && (
                <div className='status'>
                    Loading . . . Please wait
                </div>
            )}
            {status === 'rejected' && (
                <div className='status'>
                    Failed to load . . .
                </div>
            )}
            {post.map((data, index) => <Card key={index} data={data}/>)}
        </div>
        <div className="sidebar-2">
            
        </div>
    </div>
    );
};

export default SearchPage;