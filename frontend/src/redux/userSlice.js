import { createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";
import { getDecodedData, getUserData } from "../utils/storageHandler";

const userSlice = createSlice({
  name: "user",
  initialState: {
    email: null,
    token: null,
    isLogin: false,
    role: null,
  },

  reducers: {
    signup: (state, action) => {
      state.token = action.payload.token;
      const decoded = jwtDecode(action.payload.token);
      state.isLogin = true;
      state.email = decoded.email;
      state.role = decoded.role; // Add role if available
    },

    login: (state, action) => {
      state.token = action.payload.token;
      const decoded = jwtDecode(action.payload.token);
      state.isLogin = true;
      state.email = decoded.email;
      state.role = decoded.role; // Add role if available
    },

    logout: (state) => {
      state.isLogin = false;
      state.email = null;
      state.token = null;
      state.role = null;
    },
  },
});

export const { signup, login, logout } = userSlice.actions;
export default userSlice.reducer;