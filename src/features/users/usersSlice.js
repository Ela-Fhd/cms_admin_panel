import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://redux-cms.iran.liara.run/api/users";

const initialState = {
  loading: false,
  users: [],
  error: null,
};

export const fetchUsers = createAsyncThunk(
  "users/fetchUsersAsync",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(BASE_URL);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`${BASE_URL}/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addUser = createAsyncThunk(
  "users/addUser",
  async (payload, { rejectWithValue }) => {
    try {
      await axios.post(`${BASE_URL}`, payload);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const userSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state, action) => {
        state.loading = true;
        state.users = [];
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
        state.error = null;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.users = [];
        state.error = action.payload;
      })
      .addCase(deleteUser.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = state.users.filter(
          (user) => user._id !== action.payload.id
        );
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.loading = false;
        state.users = [];
        state.error = action.payload;
      })
      .addCase(addUser.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(addUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default userSlice.reducer;
