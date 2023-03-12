import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {},
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export const ActionAuthSlice = authSlice.actions;
