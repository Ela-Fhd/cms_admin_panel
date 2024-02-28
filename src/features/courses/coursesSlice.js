import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://redux-cms.iran.liara.run/api/courses";

const initialState = {
  loading: false,
  courses: [],
  error: null,
};

export const fetchCourses = createAsyncThunk(
  "courses/fetchCourses",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(BASE_URL);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteCourse = createAsyncThunk(
  "users/deleteCourse",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`${BASE_URL}/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const coursesSlice = createSlice({
  name: "courses",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.loading = true;
        state.courses = [];
        state.error = null;
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.loading = false;
        state.courses = action.payload;
        state.error = null;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.loading = false;
        state.courses = [];
        state.error = action.payload;
      })
      .addCase(deleteCourse.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(deleteCourse.fulfilled, (state, action) => {
        state.loading = false;
        state.courses = state.courses.filter(
          (course) => course._id !== action.payload.id
        );
      })
      .addCase(deleteCourse.rejected, (state, action) => {
        state.loading = false;
        state.courses = [];
        state.error = action.payload;
      });
  },
});

export default coursesSlice.reducer;
