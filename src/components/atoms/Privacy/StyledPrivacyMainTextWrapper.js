import styled from "styled-components"

export const StyledPrivacyMainTextWrapper = styled.div`
  margin-top: 6rem;
  > p {
    columns: 2;
    column-gap: 4rem;
  }

  @media (max-width: 1024px) {
    > p {
      columns: 1;
    }
  }
  p + p {
    margin-top: 4rem;
  }

  p + h3 {
    margin-top: 5rem;
  }

  h3 + p {
    margin-top: 2.5rem;
  }

  a {
    color: var(--black);
    text-decoration: none;
    position: relative;
    display: inline-block;
    font-weight: 500;
    &:after {
      content: "";
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 100%;
      height: 1px;
      transform-origin: center bottom;
      transition: opacity 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53),
        transform 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53);
      background-color: var(--black);
    }
    &:hover:after {
      transform: scaleY(2);
      opacity: 1;
    }
    &:focus-visible {
      outline: 1px solid var(--black);
    }
  }
`
