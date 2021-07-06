import styled from "styled-components"

export const HeroFooterStyles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 2;
  padding: 0 32px 40px 30px;
  @media only screen and (max-width: 1280px) {
    padding: 0 62px 46px 62px;
  }
  @media (max-width: 684px) {
    justify-content: center;
  }
  @media only screen and (max-width: 455px) {
    padding: 0 28px 46px 28px;
  }
`
