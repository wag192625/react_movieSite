import { createSlice } from '@reduxjs/toolkit';
import { useState } from 'react';

const initialState = { userId: 1, loginState: false };
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
  },
});

export const { login, logout } = loginSlice.actions;

export default loginSlice.reducer;
