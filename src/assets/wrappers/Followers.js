import styled from "styled-components";

const Wrapper = styled.article`
  background: var(--clr-white);
  border-top-right-radius: var(--border-radius);
  border-bottom-left-radius: var(--border-radius);
  border-bottom-right-radius: var(--border-radius);
  position: relative;

  &::before {
    content: " followers";
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

  .followers {
    overflow-y: scroll;
    height: 275px;
    display: grid;
    grid-template-rows: repeat(auto-fill, minmax(45px, 1fr));
    gap: 1.25rem;
    padding: 1rem 2rem;
  }

  article {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: 1rem;

    img {
      height: 45px;
      width: 45px;
      border-radius: 50%;
      object-fit: cover;
    }

    h4 {
      margin-bottom: 0;
    }

    .account-sm {
      color: var(--primary-color);
      text-transform: capitalize;
    }

    .account-lg {
      display: none;
    }

    @media (min-width: 425px) {
      .account-sm {
        display: none;
      }

      .account-lg {
        display: block;
        color: var(--para-color);
      }
    }
  }
`;

export default Wrapper;
