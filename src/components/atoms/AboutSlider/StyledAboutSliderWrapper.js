import styled from "styled-components"

export const StyledAboutSliderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1366px;
  padding: 109px 82px 94px;
  align-items: flex-start;
  margin: 0 auto 30px;

  @media only screen and (max-width: 1140px) {
    padding: 60px;
  }
  @media only screen and (max-width: 574px) {
    padding: 30px 28px 60px 28px;
  }
`
