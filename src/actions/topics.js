import { createAsyncThunk } from "@reduxjs/toolkit";

export const topics = createAsyncThunk(
    'reddit/topics',
    async (topic) => {
        const response = await fetch(`https://www.reddit.com/search.json?limit=10&q=title:${topic}`); // Temporary
        const json = await response.json();

        return json.data.children.map(post => ({
            ...post.data,
            image: post.data.url,
            video: post.data.media?.reddit_video?.fallback_url
        }));
    }
);