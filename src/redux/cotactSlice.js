import {
  addContactThunk,
  deleteContactsThunk,
  fetchDataThunk,
} from './operations';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    // deleteContact: (state, { payload }) => {
    //   state.contacts = state.contacts.filter(item => item.id !== payload);
    // },
    // addContact: {
    //   prepare: ({ name, number }) => {
    //     const id = nanoid();
    //     return { payload: { id, name, phone } };
    //   },
    //   reducer: (state, { payload }) => {
    //     state.contacts.push(payload);
    //   },
    // },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchDataThunk.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.loading = false;
      })
      .addCase(deleteContactsThunk.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(item => item.id !== payload);
      })
      .addCase(addContactThunk.fulfilled, (state, { payload }) => {
        state.items.push(payload);
      });
  },
});

export const { deleteContact, addContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
