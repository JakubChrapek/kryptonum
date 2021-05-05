import styled from "styled-components"

export const StyledMenuColumnUl = styled.ul`
  display: flex;
  flex-direction: column;
  margin-right: 16px;
  &:last-child {
    margin-right: 0;
  }

  li {
    margin-top: 7px;
    &:first-child {
      margin-top: 0;
    }
  }
`
