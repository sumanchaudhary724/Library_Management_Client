import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  burrows: [],
};
const burrowSlice = createSlice({
  name: "burrows",
  initialState,
  reducers: {
    setBurrow: (state, { payload }) => {
      state.burrows = payload;
    },
  },
});

const { reducer, actions } = burrowSlice;

export const { setBurrow } = actions;
export default reducer;
