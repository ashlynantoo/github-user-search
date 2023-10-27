import { Navigate, useNavigation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { toast } from "react-toastify";
import { Info, Loading, Navbar, Repos, Search, User } from "../components";
import {
  setGithubUser,
  setRemainingRequests,
} from "../features/githubUser/githubUserSlice";
import {
  clearUserAuthenticated,
  setUserAuthenticated,
} from "../features/user/userSlice";

const baseUrl = "https://api.github.com";

const customFetch = axios.create({
  baseURL: baseUrl,
});

const userQuery = (githubUser) => {
  return {
    queryKey: ["user", githubUser],
    queryFn: () => {
      return customFetch.get(`/users/${githubUser}`);
    },
  };
};

const followersQuery = (githubUser) => {
  return {
    queryKey: ["followers", githubUser],
    queryFn: () => {
      return customFetch.get(`/users/${githubUser}/followers`);
    },
  };
};

const reposQuery = (githubUser) => {
  return {
    queryKey: ["repos", githubUser],
    queryFn: () => {
      return customFetch.get(`/users/${githubUser}/repos?per_page=100`);
    },
  };
};

export const loader = (store, queryClient) => {
  return async ({ request }) => {
    const queryParams = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);
    const githubUser = queryParams?.user;
    try {
      if (store.getState().userState.userAuthenticated) {
        if (githubUser) {
          const { data: user } = await queryClient.ensureQueryData(
            userQuery(githubUser)
          );
          const { data: followers } = await queryClient.ensureQueryData(
            followersQuery(githubUser)
          );
          const { data: repos } = await queryClient.ensureQueryData(
            reposQuery(githubUser)
          );
          store.dispatch(setGithubUser({ user, followers, repos }));
        }
      }
      const { data: requests } = await customFetch.get("/rate_limit");
      const remainingRequests = requests.rate.remaining;
      if (remainingRequests === 0) {
        toast.error("Sorry, you have exceeded your hourly rate limit!");
      }
      store.dispatch(setRemainingRequests(remainingRequests));
    } catch (error) {
      console.log(error);
      if (error?.response?.status === 404) {
        toast.error("User does not exist!");
      } else {
        const errorMsg = error?.response?.data?.msg || "An error occurred...";
        toast.error(errorMsg);
      }
    }
    return null;
  };
};

const Dashboard = () => {
  const { isLoading, error, isAuthenticated } = useAuth0();
  const navigation = useNavigation();
  const isDataLoading = navigation.state === "loading";
  const dispatch = useDispatch();

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    toast.error(error.message);
    return <Navigate to="/login" />;
  }

  if (!isAuthenticated) {
    dispatch(clearUserAuthenticated());
    return <Navigate to="/login" />;
  } else {
    dispatch(setUserAuthenticated());

    return (
      <main>
        <Navbar />
        <Search />
        {isDataLoading ? (
          <Loading />
        ) : (
          <>
            <Info />
            <User />
            <Repos />
          </>
        )}
      </main>
    );
  }
};

export default Dashboard;
