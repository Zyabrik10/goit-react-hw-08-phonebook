import { createSlice } from '@reduxjs/toolkit';
import { signUp, logIn, logOut } from './auth-operations';

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLogedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [signUp.fulfilled]: (state, action) => {
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
      state.user = initialState.user;
      state.isLogedIn = initialState.isLogedIn;
      state.token = null;
    },
  },
});

export const authReducer = authSlice.reducer;
