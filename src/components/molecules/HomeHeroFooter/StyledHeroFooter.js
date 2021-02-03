import styled from "styled-components"

export const HeroFooterStyles = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 2;
  padding: 0 112px 32px 97px;
  @media only screen and (max-width: 455px) {
    justify-content: center;
    padding: 0 48px 32px 48px;
  }
`
