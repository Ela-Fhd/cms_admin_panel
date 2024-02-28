import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  user: [],
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuth = true;
      state.user = action.payload;
    },
    logOut: (state, action) => {
      state.isAuth = false;
      state.user = [];
    },
  },
});

export default loginSlice.reducer;
export const { login, logOut } = loginSlice.actions;
