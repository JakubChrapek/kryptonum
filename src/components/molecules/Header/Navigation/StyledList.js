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
`
