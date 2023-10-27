import { useSelector } from "react-redux";
import Wrapper from "../assets/wrappers/Repos";
import { ExampleChart, Pie3D, Column3D, Bar3D, Doughnut2D } from "./Charts";

const Repos = () => {
  const { githubUserRepos } = useSelector((store) => {
    return store.githubUserState;
  });

  const languages = githubUserRepos.reduce((total, item) => {
    const { language, stargazers_count } = item;
    if (!language) {
      return total;
    }
    if (!total[language]) {
      total[language] = { label: language, value: 1, stars: stargazers_count };
    } else {
      total[language] = {
        ...total[language],
        value: total[language].value + 1,
        stars: total[language].stars + stargazers_count,
      };
    }
    return total;
  }, {});

  const mostUsed = Object.values(languages)
    .sort((a, b) => {
      return b.value - a.value;
    })
    .slice(0, 5);

  const mostPopular = Object.values(languages)
    .sort((a, b) => {
      return b.stars - a.stars;
    })
    .slice(0, 5)
    .map((item) => {
      return { ...item, value: item.stars };
    });

  const { stars, forks } = githubUserRepos.reduce(
    (total, item) => {
      const { name, stargazers_count, forks } = item;
      total.stars[name] = { label: name, value: stargazers_count };
      total.forks[name] = { label: name, value: forks };
      return total;
    },
    {
      stars: {},
      forks: {},
    }
  );

  const mostPopularRepos = Object.values(stars)
    .sort((a, b) => {
      return b.value - a.value;
    })
    .slice(0, 5);

  const mostForked = Object.values(forks)
    .sort((a, b) => {
      return b.value - a.value;
    })
    .slice(0, 5);

  return (
    <section className="section">
      <Wrapper className="section-center">
        <Pie3D data={mostUsed} />
        <Column3D data={mostPopularRepos} />
        <Doughnut2D data={mostPopular} />
        <Bar3D data={mostForked} />
      </Wrapper>
    </section>
  );
};

export default Repos;
