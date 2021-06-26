import styled from "styled-components"

export const HomeHeroSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  height: 100vh;
  overflow: hidden;
  padding-top: 77px;
  z-index: 0;
  background-color: var(--black);

  @media (max-width: 683px) {
    align-items: flex-start;
    padding: 197px 84px 0 44px;
  }
  @media (max-width: 500px) {
    padding: 197px 82px 0 42px;
  }
`
