import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./filterSlice.js";

export const store = configureStore({
  reducer: {
    filter: filterReducer,
  },
});
