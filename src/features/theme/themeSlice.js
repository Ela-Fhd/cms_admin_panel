import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: localStorage.getItem("THEME") || "false",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state, action) => {
      state.darkMode = action.payload.theme;
      localStorage.setItem("THEME", state.darkMode);
    },
  },
});

export default themeSlice.reducer;
export const { toggleTheme } = themeSlice.actions;
