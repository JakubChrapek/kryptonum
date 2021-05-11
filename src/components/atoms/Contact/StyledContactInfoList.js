import styled from "styled-components"

export const StyledContactInfoList = styled.ul`
  li {
    font-family: "Poppins";
    color: #727272;
    padding-bottom: 4px;

    &:last-of-type {
      padding-bottom: 36px;
    }
  }
  &:last-of-type li:last-of-type {
    padding-bottom: 0;
  }
`
