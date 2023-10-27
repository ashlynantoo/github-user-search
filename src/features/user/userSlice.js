import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userAuthenticated: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserAuthenticated: (state) => {
      state.userAuthenticated = true;
    },
    clearUserAuthenticated: (state) => {
      state.userAuthenticated = false;
    },
  },
});

export default userSlice.reducer;
export const { setUserAuthenticated, clearUserAuthenticated } =
  userSlice.actions;
