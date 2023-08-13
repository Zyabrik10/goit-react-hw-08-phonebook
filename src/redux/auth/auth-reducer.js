import { createSlice } from '@reduxjs/toolkit';
import { signUp, logIn, logOut } from './auth-operations';

const tempUser = JSON.parse(localStorage.getItem('user')) || null;
const tempToken = localStorage.getItem('token') || null;

const initialState = {
  user: {
    name: tempUser ? tempUser.name : null,
    email: tempUser ? tempUser.email : null,
  },
  token: tempToken,
  isLogedIn: tempUser && tempToken ? true : false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [signUp.fulfilled]: () => {
      console.log('Signed up');
    },
    [logIn.fulfilled]: (state, action) => {
      const { token, user } = action.payload;

      state.token = token;
      state.user = user;
      state.isLogedIn = true;
      console.log('Loged in');
    },
    [logOut.fulfilled]: state => {
      console.log('Loged out');
      state.user = {
        name: null,
        gmail: null,
      };
      state.isLogedIn = false;
      state.token = null;
    },
  },
});

export const authReducer = authSlice.reducer;
