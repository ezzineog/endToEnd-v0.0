import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: false,
};


export const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
      toggleTheme: (state) => {
        state.darkMode = !state.darkMode;
      },
    },
  });
  
  // Action creators are generated for each case reducer function
  export const { toggleTheme } = themeSlice.actions;
  
  export default themeSlice.reducer;