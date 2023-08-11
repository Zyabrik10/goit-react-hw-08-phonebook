import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts;
export const selectFilter = state => state.filter;
export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  ({ items }, filter) =>
    items.filter(e => e.name.toLowerCase().includes(filter.toLowerCase()))
);
