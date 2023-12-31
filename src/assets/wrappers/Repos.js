import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  margin-bottom: 2rem;

  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }

  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--border-radius) !important;
  }
`;

export default Wrapper;
