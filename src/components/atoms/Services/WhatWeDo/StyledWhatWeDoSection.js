import styled from "styled-components"

export const StyledWhatWeDoSection = styled.section`
  padding: 130px 112px;
  @media (max-width: 1242px) {
    padding: 104px 60px;
  }
  @media (max-width: 1140px) {
    padding: 104px 40px;
  }
  @media (max-width: 600px) {
    padding: 84px 28px;
  }
  background-color: var(--light-gray);
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
