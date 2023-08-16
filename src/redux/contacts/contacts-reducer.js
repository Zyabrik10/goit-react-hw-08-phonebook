import { createSlice } from '@reduxjs/toolkit';
import {
  deleteContact,
  fetchContacts,
  addContact,
} from './contacts-operations';

import { deleteAllContacts } from './contacts-operations';

const initContacts = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initContacts,
  extraReducers: {
    [fetchContacts.pending]: state => {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.error]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [deleteContact.fulfilled]: (state, action) => {
      const index = state.items.findIndex(
        contact => contact.id === action.payload
      );

      state.error = null;
      state.items.splice(index, 1);
    },
    [deleteContact.error]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [addContact.fulfilled]: (state, action) => {
      if (action.payload) state.items.push(action.payload);
    },
    [addContact.error]: (state, action) => {
      state.error = action.payload;
    },
    [deleteAllContacts.fulfilled]: state => {
      state.items = [];
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
