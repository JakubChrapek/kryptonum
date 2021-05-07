import styled from "styled-components"

export const StyledSpanElipseWrapper = styled.div`
  align-items: center;
  display: none;
  @media only screen and (max-width: 767px) {
    display: flex;
    justify-content: center;
    margin-bottom: 37px;
  }
  @media only screen and (max-width: 500px) {
    transform: translateX(0);
  }
`
