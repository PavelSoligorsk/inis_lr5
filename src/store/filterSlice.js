import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: { tag: "Все" },
  reducers: {
    setTag(state, action) {
      state.tag = action.payload;
    },
  },
});

export const { setTag } = filterSlice.actions;
export default filterSlice.reducer;
