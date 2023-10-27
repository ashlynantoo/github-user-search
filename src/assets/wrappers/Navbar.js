import styled from "styled-components";

const Wrapper = styled.nav`
  padding: 1.5rem 0;
  margin-bottom: 3rem;
  background: var(--clr-white);

  .section-center {
    display: grid;
    grid-template-columns: auto auto;
    align-items: center;
    gap: 1rem;
  }

  .user-info {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  img {
    width: 35px !important;
    height: 35px;
    border-radius: 50%;
    object-fit: cover;
  }

  h4 {
    margin-bottom: 0;
    font-weight: 400;
    text-transform: none;
  }

  button {
    background: transparent;
    border: transparent;
    font-size: 1rem;
    text-transform: capitalize;
    letter-spacing: var(--letter-spacing-sm);
    color: var(--primary-color);
    cursor: pointer;
    justify-self: end;
  }
`;

export default Wrapper;
