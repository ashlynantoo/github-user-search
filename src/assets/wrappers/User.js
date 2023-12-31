import styled from "styled-components";

const Wrapper = styled.div`
  padding-top: 2rem;
  display: grid;
  gap: 4rem 2rem;

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export default Wrapper;
