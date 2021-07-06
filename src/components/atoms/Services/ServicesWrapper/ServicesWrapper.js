import styled from "styled-components"

export const ServicesWrapper = styled.ul`
  display: grid;
  grid-template-columns: auto auto auto auto;
  --gap: 15rem;
  grid-column-gap: var(--gap);
  width: 100%;
  padding-right: ${({ first }) => first && "var(--gap)"};

  @media (max-width: 1024px) {
    --gap: 10rem;
  }

  @media (max-width: 767px) {
    --gap: 8rem;
  }
  @media (max-width: 520px) {
    --gap: 5rem;
  }

  h3 {
    font-size: clamp(50px, 5vw, 150px);
    @media (max-width: 767px) {
      font-size: clamp(32px, 6vw, 60px);
    }
    line-height: 1.5;
    color: var(--black-font);
    font-weight: normal;
    white-space: nowrap;

    &.underline {
      position: relative;
      &:after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: calc(100% - 15px);
        height: 3px;
        background-color: var(--accent);
        /* z-index: -1; */
      }
    }
  }
  .box {
    text-align: center;
  }
`
