import { createSlice, nanoid } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "contacts",
  storage,
  whitelist: ["items"],
};

export const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
  },
  reducers: {
    addContact: (state, { payload }) => {
      state.items.push({ id: nanoid(), ...payload });
    },
    deleteContact: (state, { payload }) => {
      state.items = state.items.filter(item => item.id !== payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const selectContacts = state => state.contacts.items;
export const contactsReducer = persistReducer(persistConfig, contactsSlice.reducer);
