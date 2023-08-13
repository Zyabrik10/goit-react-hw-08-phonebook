import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const signUp = createAsyncThunk(
  'user/signup',
  async (user, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signup', user);
      return data;
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
      console.log(e);
    }
  }
);

export const logIn = createAsyncThunk(
  '/users/login',
  async (user, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/login', user);
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      return data;
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
      console.log(e);
    }
  }
);

export const logOut = createAsyncThunk(
  'user/logOut',
  async (token, thunkAPI) => {
    try {
      const { data } = await axios.post(
        '/users/logout',
        {},
        {
          headers: {
            Authorization: token,
          },
        }
      );

      localStorage.removeItem('token');
      localStorage.removeItem('user');

      return data;
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
      console.log(e);
    }
  }
);
