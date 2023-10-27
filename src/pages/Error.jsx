import { useRouteError, Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/Error";

const Error = () => {
  const error = useRouteError();
  console.log(error);

  if (error.status === 404) {
    return (
      <Wrapper className="full-page">
        <div>
          <h1>404</h1>
          <h3>page not found</h3>
          <p>Sorry, we could not find the page you are looking for.</p>
          <Link to="/" className="btn">
            Go back Home
          </Link>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper className="full-page">
      <h4>An error occurred. Please try again later.</h4>
    </Wrapper>
  );
};

export default Error;
