import { useSelector } from "react-redux";
import { Form } from "react-router-dom";
import { MdSearch } from "react-icons/md";
import Wrapper from "../assets/wrappers/Search";

const Search = () => {
  const { remainingRequests } = useSelector((store) => {
    return store.githubUserState;
  });

  return (
    <section className="section">
      <Wrapper className="section-center">
        <Form method="get">
          <div className="form-control">
            <MdSearch />
            <input
              type="search"
              name="user"
              defaultValue="john-smilga"
              placeholder="enter the github user"
              required
            />
            {remainingRequests > 0 && (
              <button type="submit" className="btn">
                search
              </button>
            )}
          </div>
        </Form>
        <h3>requests : {remainingRequests} / 60</h3>
      </Wrapper>
    </section>
  );
};

export default Search;
