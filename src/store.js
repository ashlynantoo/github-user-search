import { configureStore } from "@reduxjs/toolkit";
import githubUserReducer from "./features/githubUser/githubUserSlice";
import userReducer from "./features/user/userSlice";

export const store = configureStore({
  reducer: {
    githubUserState: githubUserReducer,
    userState: userReducer,
  },
});
