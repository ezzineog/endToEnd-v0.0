import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode_global_state: false,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode_global_state = !state.mode_global_state;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;