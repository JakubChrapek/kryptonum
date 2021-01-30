import styled from "styled-components"

export const HomeHeroSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100vh;
  padding-top: 77px;
  z-index: 0;
  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: 0;
    background-color: rgba(0, 0, 0, 0.6);
  }
  @media (max-width: 683px) {
    align-items: flex-start;
    padding-top: 197px;
    padding: 197px 84px 0 44px;

    &:after {
      background-color: var(--black);
    }
  }
`
