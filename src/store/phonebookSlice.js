import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "phonebook",
  storage,
  whitelist: ["contacts"],
};

export const phonebookSlice = createSlice({
  name: "phonebook",
  initialState: {
    contacts: [],
    filter: "",
  },
  reducers: {
    addContact: (state, { payload }) => {
      state.contacts.push(payload);
    },
    deleteContact: (state, { payload }) => {
      state.contacts = state.contacts.filter(item => item.id !== payload);
    },
    updateFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const { addContact, deleteContact, updateFilter } = phonebookSlice.actions;

export const selectContacts = state => state.phonebook.contacts;
export const selectFilter = state => state.phonebook.filter;

export const phonebookReducer = persistReducer(persistConfig, phonebookSlice.reducer);
