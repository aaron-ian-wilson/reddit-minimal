import { createAsyncThunk } from "@reduxjs/toolkit";

export const search = createAsyncThunk(
    'reddit/search',
    async (query) => {
        const response = await fetch(`https://www.reddit.com/search.json?limit=10&q=title:${query}`);
        const json = await response.json();

        if (!json.data || !json.data.children) {
            console.log('No results found');
            return [];
        }
        
        return json.data.children.map(post => ({
            ...post.data,
            image: post.data.url,
            video: post.data.media?.reddit_video?.fallback_url
        }));
    }
);