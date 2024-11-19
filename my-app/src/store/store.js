import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './slices/loginSlice'
const store = configureStore({
  reducer: {
    logState: loginReducer,
  },
});

export default store;
