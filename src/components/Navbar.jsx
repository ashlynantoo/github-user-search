import { useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import Wrapper from "../assets/wrappers/Navbar";
import { clearUserAuthenticated } from "../features/user/userSlice";

const Navbar = () => {
  const { user, logout } = useAuth0();
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <div className="section-center">
        <div className="user-info">
          {user.picture && <img src={user.picture} alt={user.name} />}
          {user.name && (
            <h4>
              Welcome, <strong>{user.name}</strong>
            </h4>
          )}
        </div>
        <button
          onClick={() => {
            logout({ logoutParams: { returnTo: window.location.origin } });
            dispatch(clearUserAuthenticated());
          }}
        >
          Log Out
        </button>
      </div>
    </Wrapper>
  );
};

export default Navbar;
