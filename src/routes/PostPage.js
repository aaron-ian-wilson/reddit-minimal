import React, { useEffect } from 'react';
import Card from '../components/Card/Card';
import Comments from '../components/Comments/Comments';
import Search from '../components/Search/Search';
import Topics from '../components/Topics/Topics';
import { comments as _comments } from '../actions/post-comments';
import { selectPosts, selectComments, selectStatus } from '../slices/reddit';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';


const PostPage = () => {
    const post = useSelector(selectPosts);
    const comments = useSelector(selectComments);
    const status = useSelector(selectStatus);
    
    const { id } = useParams();
    const data = post.find(post => post.id === id);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(_comments({id: data.id, subreddit: data.subreddit}));
    }, [dispatch, data]);

    return (
        <div className="body">
        <div className="sidebar-left">
            <Topics />
        </div>
        <div className="content">
            <Search />
            <Card data={data}>
                {status === 'pending' && (
                    <div>
                        Loading . . .
                    </div>
                )}
                {status === 'rejected' && (
                    <div>
                        Failed to load . . .
                    </div>
                )}
                <Comments comment={comments}/>
            </Card>
        </div>
        <div className="sidebar-right">
            
        </div>
    </div>
    );
};

export default PostPage;