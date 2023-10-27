import { createSlice } from "@reduxjs/toolkit";
import {
  githubUser,
  githubUserRepos,
  githubUserFollowers,
} from "../../utils/mockGithubUserData";

const initialState = {
  githubUser,
  githubUserRepos,
  githubUserFollowers,
  remainingRequests: 60,
};

const githubUserSlice = createSlice({
  name: "githubUser",
  initialState,
  reducers: {
    setRemainingRequests: (state, action) => {
      const remainingRequests = action.payload;
      state.remainingRequests = remainingRequests;
    },
    setGithubUser: (state, action) => {
      const { user, followers, repos } = action.payload;
      state.githubUser = user;
      state.githubUserRepos = repos;
      state.githubUserFollowers = followers;
    },
  },
});

export default githubUserSlice.reducer;
export const { setRemainingRequests, setGithubUser } = githubUserSlice.actions;
