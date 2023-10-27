import styled from "styled-components";

const Wrapper = styled.article`
  background: var(--clr-white);
  border-top-right-radius: var(--border-radius);
  border-bottom-left-radius: var(--border-radius);
  border-bottom-right-radius: var(--border-radius);
  position: relative;

  &::before {
    content: "user";
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-100%);
    background: var(--clr-white);
    color: var(--para-color);
    border-top-right-radius: var(--border-radius);
    border-top-left-radius: var(--border-radius);
    text-transform: capitalize;
    padding: 0.5rem 1.25rem 0 1rem;
    font-size: 1rem;
  }

  .card {
    padding: 1rem 2rem;
  }

  header {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;

    img {
      width: 75px;
      height: 75px;
      border-radius: 50%;
      object-fit: cover;
    }

    .details {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    h4 {
      margin-bottom: 0.25rem;
    }

    p {
      margin-bottom: 0;
    }

    a {
      color: var(--primary-color);
      text-transform: capitalize;
      transition: var(--transition);
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }

  .bio {
    color: var(--clr-grey-3);
  }

  .links {
    p,
    a {
      margin-bottom: 0.5rem;
      display: flex;
      gap: 0.75rem;
      align-items: center;

      svg {
        font-size: 1.3rem;
      }
    }

    a {
      color: var(--primary-color);
      transition: var(--transition);
      svg {
        color: var(--para-color);
      }
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export default Wrapper;
