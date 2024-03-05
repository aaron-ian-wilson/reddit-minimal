import { createAsyncThunk } from "@reduxjs/toolkit";

export const popular = createAsyncThunk(
    'reddit/popular',
    async () => {
        const response = await fetch('https://www.reddit.com/r/popular.json?limit=10');
        const json = await response.json();

        return json.data.children.map(post => ({
            ...post.data,
            image: post.data.url,
            video: post.data.media?.reddit_video?.fallback_url
        }));
    }
);