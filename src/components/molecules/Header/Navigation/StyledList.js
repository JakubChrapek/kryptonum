import styled from "styled-components"

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0;
  li {
    display: inline-flex;
  }

  @media only screen and (max-width: 640px) {
    justify-content: flex-start;
    height: unset;
    margin: 0 0 50px;
  }
  @media only screen and (max-width: 540px) {
    margin: 0 0 32px;
  }
  @media only screen and (max-width: 410px) {
    margin: 0 0 28px;
  }
  @media only screen and (max-width: 374px) {
    margin: 0 0 24px;
  }
`
