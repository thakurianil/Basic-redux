import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./Slice";
const store = configureStore({
    reducer: {
      book: bookReducer,
    },
  });

export default store;