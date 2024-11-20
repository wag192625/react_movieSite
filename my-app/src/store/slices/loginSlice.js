import { createSlice } from '@reduxjs/toolkit';
import { useState } from 'react';

const initialState = { loginState: false, bookMark: [] };

const loginSlice = createSlice({
  name: 'logState',
  initialState,
  reducers: {
    login: (state, action) => {
      state.loginState = true;
    },
    logout: (state, action) => {
      state.loginState = false;
    },
    addBookmark: (state, action) => {
      // bookMark 에게 push 하고싶다. action.payload를
      state.bookMark.push(action.payload);
    },
    deleteBookmark: (state, action) => {
      // bookMark 에게 push 하고싶다. action.payload를
      state.bookMark.pop(action.payload);
    },
  },
});

export const { login, logout } = loginSlice.actions;
export const { addBookmark } = loginSlice.actions;

export default loginSlice.reducer;
