import styled from "styled-components";

const Wrapper = styled.main`
  display: grid;
  place-items: center;

  .container {
    width: var(--view-width);
    max-width: 600px;
    text-align: center;
  }

  img {
    margin-bottom: 2rem;
  }

  h1 {
    margin-bottom: 1.5rem;
  }
`;

export default Wrapper;
