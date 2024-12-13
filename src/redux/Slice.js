import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "book",
  initialState: {
    book: []
  },
  reducers: {
    newBook: (state, { payload }) => {
      state.book = payload || [];
    },
  },
});

export const { reducer, actions } = counterSlice;
export const { newBook } = actions;

export default reducer;

