import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./users/usersSlice";
import coursesSlice from "./courses/coursesSlice";
import blogsSlice from "./blogs/blogsSlice";
import loginSlice from "./login/loginSlice";
import themeSlice from "./theme/themeSlice";

const store = configureStore({
  reducer: {
    users: usersSlice,
    courses: coursesSlice,
    blogs: blogsSlice,
    login: loginSlice,
    theme: themeSlice,
  },
});

export default store;
