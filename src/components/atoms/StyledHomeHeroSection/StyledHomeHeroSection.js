import styled from "styled-components"

export const HomeHeroSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  height: 100vh;
  overflow: hidden;
  padding-top: 77px;
  z-index: 1;

  @media (max-width: 683px) {
    padding: 167px 28px 0 36px;
  }
  @media (max-width: 512px) {
    padding: 147px 28px 0 36px;
  }
`
