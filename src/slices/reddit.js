import { createSlice } from '@reduxjs/toolkit';

const reddit = createSlice({
    name: 'reddit',
    state: {
        posts: [],
        comments: [],
        status: 'idle',
        error: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
          .addMatcher(
            (action) => action.type.endsWith('/pending'),
            (state) => {
              state.status = 'pending';
              state.error = false;
            }
          )
          .addMatcher(
            (action) => action.type.endsWith('/fulfilled'),
            (state, action) => {
              state.status = 'fulfilled';
              state.posts = action.payload;
              state.comments = action.payload;
              state.error = false
            }
          )
          .addMatcher(
            (action) => action.type.endsWith('/rejected'),
            (state) => {
              state.status = 'rejected';
              state.error = true;
            }
          );
      },
});

export default reddit.reducer;

export const selectPosts = (state) => state.reddit.posts;
export const selectComments = (state) => state.reddit.comments;
export const selectStatus = (state) => state.reddit.status;