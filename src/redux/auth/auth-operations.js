import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { alertObj } from 'js/alert-obj';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const signUp = createAsyncThunk(
  'user/signup',
  async (user, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signup', user);
      toast.success('Signed up', alertObj);
      return data;
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
      console.log(e);
      toast.error('Somthing went wrong', alertObj);
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

      toast.success('Loged In', alertObj);
      return data;
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
      console.log(e);
      toast.error('Somthing went wrong', alertObj);
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

      toast.success('Loged out', alertObj);

      return data;
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
      console.log(e);
      toast.error('Somthing went wrong', alertObj);
    }
  }
);
