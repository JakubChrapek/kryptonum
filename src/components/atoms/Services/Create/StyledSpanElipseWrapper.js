import styled from "styled-components"

export const StyledSpanElipseWrapper = styled.div`
  display: flex;
  align-items: center;
  @media only screen and (max-width: 767px) {
    justify-content: center;
    margin-bottom: 37px;
  }
  @media only screen and (max-width: 500px) {
    transform: translateX(0);
  }
`
