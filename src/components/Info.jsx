import { useSelector } from "react-redux";
import Wrapper from "../assets/wrappers/Info";
import { GoRepo } from "react-icons/go";
import { FiUsers, FiUserPlus } from "react-icons/fi";
import { VscGist } from "react-icons/vsc";
import GithubUserData from "./GithubUserData";

const Info = () => {
  const { githubUser } = useSelector((store) => {
    return store.githubUserState;
  });
  const { public_repos, followers, following, public_gists } = githubUser;
  const githubUserData = [
    {
      id: 1,
      icon: <GoRepo className="icon" />,
      label: "repos",
      value: public_repos,
      color: "pink",
    },
    {
      id: 2,
      icon: <FiUsers className="icon" />,
      label: "followers",
      value: followers,
      color: "green",
    },
    {
      id: 3,
      icon: <FiUserPlus className="icon" />,
      label: "following",
      value: following,
      color: "purple",
    },
    {
      id: 4,
      icon: <VscGist className="icon" />,
      label: "gists",
      value: public_gists,
      color: "yellow",
    },
  ];

  return (
    <section className="section">
      <Wrapper className="section-center">
        {githubUserData.map((data) => {
          return <GithubUserData key={data.id} {...data} />;
        })}
      </Wrapper>
    </section>
  );
};

export default Info;
