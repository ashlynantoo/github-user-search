import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  gap: 2rem;

  @media (min-width: 640px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  .item {
    border-radius: var(--border-radius);
    padding: 1rem 2rem;
    background: var(--clr-white);
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 3rem;
    align-items: center;

    span {
      width: 3rem;
      height: 3rem;
      display: grid;
      place-items: center;
      border-radius: 50%;
    }
    .icon {
      font-size: 1.5rem;
    }

    h3 {
      margin-bottom: 0;
      letter-spacing: 0;
    }

    p {
      margin-bottom: 0;
      text-transform: capitalize;
    }

    .pink {
      background: #ffe0f0;
      color: #da4a91;
    }

    .green {
      background: var(--clr-primary-10);
      color: var(--primary-color);
    }

    .purple {
      background: #e6e6ff;
      color: #5d55fa;
    }

    .yellow {
      background: #fffbea;
      color: #f0b429;
    }
  }
`;

export default Wrapper;
