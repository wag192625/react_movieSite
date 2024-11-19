import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './slices/postsSlice';
import loginReducer from './slices/loginSlice';

const store = configureStore({
  reducer: {
    posts: postsReducer,
    // slices 안에 있는 postSlice
    logState: loginReducer,
  },
});

export default store;
