import { configureStore } from '@reduxjs/toolkit';
import redditReducer from '../slices/reddit';

const store = configureStore({
    reducer: {
        reddit: redditReducer
    }
});

export default store;
