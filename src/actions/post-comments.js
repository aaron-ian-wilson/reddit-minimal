import { createAsyncThunk } from "@reduxjs/toolkit";

export const comments = createAsyncThunk(
    'reddit/comments',
    async ({id, subreddit}) => {
        const response = await fetch(`https://www.reddit.com/r/${subreddit}/comments/${id}.json`);
        const json = await response.json();

        const comments = json[1].data.children;

        return comments.map(comment => ({
            ...comment.data,
            replies: comment.data.replies ? comment.data.replies.data.children.map(reply => reply.data) : []
        }));
    }
);