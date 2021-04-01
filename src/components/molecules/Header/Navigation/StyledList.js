import styled from "styled-components"

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  margin: 32px 0 0;
  li {
    display: inline-flex;
  }

  @media only screen and (max-width: 800px) {
    justify-content: flex-start;
    height: unset;
    margin: 24px 0 50px;
  }
  @media only screen and (max-width: 540px) {
    margin: 18px 0 32px;
  }
  @media only screen and (max-width: 410px) {
    margin: 16px 0 28px;
  }
  @media only screen and (max-width: 374px) {
    margin: 14px 0 24px;
  }
`
