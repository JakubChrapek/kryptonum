import styled from "styled-components"

export const StyledElipseWrapper = styled.div`
  padding-right: 110px;
  width: 49px;
  @media only screen and (max-width: 1204px) {
    padding-right: 0;
  }
  @media only screen and (max-width: 816px) {
    transform: translateX(80px);
  }
  @media only screen and (max-width: 710px) {
    margin-bottom: 54px;
  }
`
