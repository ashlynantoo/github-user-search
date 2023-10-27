import { useSelector } from "react-redux";
import { MdBusiness, MdLocationOn, MdLink } from "react-icons/md";
import Wrapper from "../assets/wrappers/Card";

const Card = () => {
  const { githubUser } = useSelector((store) => {
    return store.githubUserState;
  });
  const {
    avatar_url,
    html_url,
    name,
    company,
    blog,
    bio,
    location,
    twitter_username,
  } = githubUser;

  return (
    <Wrapper>
      <div className="card">
        <header>
          <img src={avatar_url} alt={name} className="img" />
          <div className="details">
            <div>
              <h4>{name}</h4>
              <p>@{twitter_username || name}</p>
            </div>
            <a href={html_url}>follow</a>
          </div>
        </header>
        <p className="bio">{bio}</p>
        <div className="links">
          <p>
            <MdBusiness />
            {company}
          </p>
          <p>
            <MdLocationOn />
            {location || "earth"}
          </p>
          <a href={`https://${blog}`}>
            <MdLink />
            {blog}
          </a>
        </div>
      </div>
    </Wrapper>
  );
};

export default Card;
