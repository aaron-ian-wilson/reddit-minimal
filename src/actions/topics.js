import { createAsyncThunk } from "@reduxjs/toolkit";

export const topics = createAsyncThunk(
    'reddit/topics',
    async (topic) => {
        const response = await fetch(`https://www.reddit.com/r/${topic}.json?limit=10`); // '/r/' is temporary until we can fetch topics from reddits API
        const json = await response.json();

        return json.data.children.map(post => ({
            ...post.data,
            image: post.data.url,
            video: post.data.media?.reddit_video?.fallback_url
        }));
    }
);