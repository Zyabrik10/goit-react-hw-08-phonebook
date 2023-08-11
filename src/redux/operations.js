import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';
axios.defaults.baseURL = 'https://64d51578b592423e46951c34.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/removeContact',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      return response.data.id;
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, phone }, thunkAPI) => {
    try {
      const newContact = {
        name,
        phone,
      };

      const response = await axios.get('/contacts');

      if (
        !response.data.filter(({ name }) => name === newContact.name).length
      ) {
        const response = await axios.post(`/contacts`, newContact);
        return response.data;
      }

      alert('Such contact is already existing');
      return null;
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
    }
  }
);
