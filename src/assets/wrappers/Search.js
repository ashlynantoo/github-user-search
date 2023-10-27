import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  gap: 1.5rem;
  text-align: center;

  @media (min-width: 768px) {
    grid-template-columns: 1fr max-content;
    align-items: center;
  }

  .form-control {
    background: var(--clr-white);
    display: grid;
    align-items: center;
    grid-template-columns: auto 1fr auto;
    gap: 0.25rem;
    border-radius: var(--border-radius);
    padding: 0.25rem;

    svg {
      display: none;
    }

    @media (min-width: 375px) {
      svg {
        color: var(--para-color);
        display: block;
      }
    }

    input {
      border-color: transparent;
      outline-color: transparent;
      letter-spacing: var(--letter-spacing-sm);
      color: var(--para-color);
      padding: 0.3rem 0.5rem;
    }

    input::placeholder {
      color: var(--para-color);
      text-transform: capitalize;
      letter-spacing: var(--letter-spacing-sm);
    }

    @media (min-width: 425px) {
      button,
      input,
      svg {
        font-size: 1rem;
      }
    }

    @media (min-width: 768px) {
      button,
      input,
      svg {
        font-size: 1.1rem;
      }
    }
  }

  h3 {
    margin-bottom: 0;
    color: var(--para-color);
    font-weight: 400;
  }

  @media (min-width: 768px) {
    h3 {
      font-size: 1.5rem;
    }
  }
`;

export default Wrapper;
