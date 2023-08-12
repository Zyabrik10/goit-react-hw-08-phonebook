import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (token, thunkAPI) => {
    try {
      console.log('Token:', token);
      const response = await axios.get('/contacts', {
        headers: {
          Authorization: token,
        },
      });
      return response.data;
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/removeContact',
  async ({ id, token }, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${id}`, {
        headers: {
          Authorization: token,
        },
      });
      return response.data.id;
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number, token }, thunkAPI) => {
    try {
      const newContact = {
        name,
        number,
      };

      const { data } = await axios.get('/contacts', {
        headers: {
          Authorization: token,
        },
      });

      console.log(data);

      if (!data.filter(({ name }) => name === newContact.name).length) {
        const { data } = await axios.post(`/contacts`, newContact, {
          headers: {
            Authorization: token,
          },
        });

        return data;
      }

      alert('Such contact is already existing');
      return null;
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
    }
  }
);
