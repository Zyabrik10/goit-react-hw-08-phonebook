import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filter/filter-reducer';
import { contactsReducer } from './contacts/contacts-reducer';
import { authReducer } from './auth/auth-reducer';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    auth: authReducer,
  },
});
