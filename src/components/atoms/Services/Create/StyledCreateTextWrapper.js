import styled from "styled-components"

export const StyledCreateTextWrapper = styled.div`
  flex: 1 1 52.5%;
  @media (max-width: 1024px) {
    max-width: 364px;
    margin-left: auto;
  }
  @media only screen and (max-width: 767px) {
    text-align: center;
    display: flex;
    flex-direction: column;
    flex: 1 1 100%;
    align-items: center;
    margin-left: 0;
  }
`
