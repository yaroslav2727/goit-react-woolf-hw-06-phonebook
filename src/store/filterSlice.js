import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    filter: "",
  },
  reducers: {
    updateFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const { updateFilter } = filterSlice.actions;

export const selectFilter = state => state.filter.filter;

export const filterReducer = filterSlice.reducer;
