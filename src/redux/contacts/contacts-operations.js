import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { alertObj } from 'js/alert-obj';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (token, thunkAPI) => {
    try {
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
      toast.success('Deleted', alertObj);
      return response.data.id;
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
      toast.error('Somthing went wrong', alertObj);
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

      if (!data.filter(({ name }) => name === newContact.name).length) {
        const { data } = await axios.post(`/contacts`, newContact, {
          headers: {
            Authorization: token,
          },
        });
        toast.success('Added', alertObj);

        return data;
      }

      toast.info('Such contact is already existing', alertObj);
      return null;
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteAllContacts = createAsyncThunk(
  'contacts/deleteAllContacts',
  async ({ contacts, token }, thunkAPI) => {
    try {
      for (const contact of contacts) {
        const { id } = contact;

        toast.promise(
          axios.delete(`/contacts/${id}`, {
            headers: {
              Authorization: token,
            },
          }),
          {
            pending: 'Deleting in progress',
            success: 'Deleting is done 👌',
            error: 'Deleting rejected 🤯',
          },
          alertObj
        );
      }
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
    }
  }
);
