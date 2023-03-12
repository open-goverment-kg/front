import { createSlice } from "@reduxjs/toolkit";

export const Slice = createSlice({
  name: "counter",
  initialState: { data: [] },
  reducers: {
    getData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const ActionSlice = Slice.actions;
