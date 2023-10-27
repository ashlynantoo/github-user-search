import { useAuth0 } from "@auth0/auth0-react";
import Wrapper from "../assets/wrappers/Login";
import loginImg from "../assets/images/login.svg";

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Wrapper className="full-page">
      <div className="container">
        <img src={loginImg} alt="github user" className="img" />
        <h1>github user</h1>
        <button
          onClick={() => {
            loginWithRedirect();
          }}
          className="btn"
        >
          login
        </button>
      </div>
    </Wrapper>
  );
};

export default Login;
