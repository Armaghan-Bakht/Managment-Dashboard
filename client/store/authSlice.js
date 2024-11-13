// authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: localStorage.getItem('token') || null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    removeToken: (state) => {
      state.token = null;
    },
  },
});

export const { setToken, removeToken } = authSlice.actions;

// Selector to get the token
export const selectToken = (state) => state.auth.token;

export default authSlice.reducer;
