import styled from "styled-components";

const Wrapper = styled.main`
  background: var(--clr-primary-10);
  display: grid;
  place-items: center;
  text-align: center;

  h1 {
    font-size: 9rem;
    margin-bottom: 0;
  }

  h3 {
    margin-bottom: 0.5rem;
  }

  p {
    text-align: center;
    margin-bottom: 1rem;
  }
`;

export default Wrapper;
