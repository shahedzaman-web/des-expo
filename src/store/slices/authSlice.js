import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "../services/authApi";

const initialState = {
  isAuthenticated: false,
  token: null,
  userInfo: {},
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.signinUser.matchFulfilled,

      (state, { payload }) => {

        state.isAuthenticated = true;
        state.token = payload.access_token;
        state.userInfo = payload.data.user;
      }
    );
    builder.addMatcher(
      authApi.endpoints.logoutUser.matchFulfilled,
      (state) => {
        state.isAuthenticated = false;
        state.token = null;
        state.userInfo = {};
      }
    )
  },
});
