import { useSelector } from "react-redux";
import Wrapper from "../assets/wrappers/Followers";

const Followers = () => {
  const { githubUserFollowers } = useSelector((store) => {
    return store.githubUserState;
  });

  return (
    <Wrapper>
      <div className="followers">
        {githubUserFollowers.map((follower) => {
          const { id, avatar_url, html_url, login } = follower;
          return (
            <article key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url} className="account-sm">
                  github account
                </a>
                <a href={html_url} className="account-lg">
                  {html_url}
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default Followers;
