import React, { useEffect } from 'react';
import Card from '../components/Card/Card';
import Comments from '../components/Comments/Comments';
import Search from '../components/Search/Search';
import Topics from '../components/Topics/Topics';
import { comments } from '../actions/post-comments';
import { selectPosts, selectComments, selectStatus } from '../slices/reddit';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';


const Post = () => {
    const post = useSelector(selectPosts);
    const comment = useSelector(selectComments);
    const status = useSelector(selectStatus);
    
    const { id } = useParams();
    const data = post.find(post => post.id === id);


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(comments({id: data.id, subreddit: data.subreddit}));
    }, [dispatch]);

    return (
        <div className="body">
        <div id="sidebar-1">
            <Topics />
        </div>
        <div id="content">
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
                <Comments comment={comment}/>
            </Card>
        </div>
        <div id="sidebar-2">
            
        </div>
    </div>
    );
};

export default Post;