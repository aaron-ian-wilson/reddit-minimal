import { createSlice } from '@reduxjs/toolkit';
import { popular, comments, search, topics } from '../actions/';

const redditSlice = createSlice({
    name: 'reddit',
    initialState: {
        posts: [],
        comments: [],
        status: 'idle',
        error: false,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
      .addCase(popular.pending, (state) => {
          state.status = 'pending';
          state.error = false;
      }) 
      .addCase(popular.fulfilled, (state, action) => {
          state.status = 'fulfilled';
          state.posts = action.payload;
          state.error = false;
      })
      .addCase(popularPosts.rejected, (state) => {
          state.status = 'rejected';
          state.error = true;
      })
      .addCase(search.pending, (state) => {
          state.status = 'pending';
          state.error = false;
      })
      .addCase(search.fulfilled, (state, action) => {
          state.status = 'fulfilled';
          state.posts = action.payload;
          state.error = false;
      })
      .addCase(search.rejected, (state) => {
          state.status = 'rejected'
          state.error = true;
      })
      .addCase(comments.pending, (state) => {
          state.status = 'pending';
          state.error = false;
      }) 
      .addCase(comments.fulfilled, (state, action) => {
          state.status = 'fulfilled';
          state.comments = action.payload;
          state.error = false;
      })
      .addCase(comments.rejected, (state) => {
          state.status = 'rejected';
          state.error = true;
      })
      .addCase(topics.pending, (state) => {
          state.status = 'pending';
          state.error = false;
      }) 
      .addCase(topics.fulfilled, (state, action) => {
          state.status = 'fulfilled';
          state.posts = action.payload;
          state.error = false;
      })
      .addCase(topics.rejected, (state) => {
          state.status = 'rejected';
          state.error = true;
      })
  },
});

export default redditSlice.reducer;

export const selectPosts = (state) => state.reddit.posts;
export const selectComments = (state) => state.reddit.comments;
export const selectStatus = (state) => state.reddit.status;