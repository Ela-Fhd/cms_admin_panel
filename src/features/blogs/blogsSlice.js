import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://redux-cms.iran.liara.run/api/articles";

const initilaState = {
  loading: false,
  blogs: [],
  error: null,
};

export const fetchBlogs = createAsyncThunk(
  "blogs/fetchBlogs",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(BASE_URL);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteBlog = createAsyncThunk(
  "users/deleteBlog",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`${BASE_URL}/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const blogsSlice = createSlice({
  name: "blogs",
  initialState: initilaState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state, action) => {
        state.loading = true;
        state.blogs = [];
        state.error = null;
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.loading = false;
        state.blogs = action.payload;
        state.error = null;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.loading = false;
        state.blogs = [];
        state.error = action.payload;
      })
      .addCase(deleteBlog.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(deleteBlog.fulfilled, (state, action) => {
        state.loading = false;
        state.blogs = state.blogs.filter(
          (blog) => blog._id !== action.payload.id
        );
      })
      .addCase(deleteBlog.rejected, (state, action) => {
        state.loading = false;
        state.blogs = [];
        state.error = action.payload;
      });
  },
});

export default blogsSlice.reducer;
