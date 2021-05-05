import styled from "styled-components"

export const StyledCopyrightWrapperDiv = styled.div`
  display: flex;
  @media (max-width: 865px) {
    flex-wrap: wrap;
  }
  &:first-child {
    @media (max-width: 865px) {
      margin-top: 16px;
      order: 2;
    }
    @media (max-width: 767px) {
      margin-top: 66px;
    }
    > span {
      &:after {
        display: none;
      }
    }
  }
  &:last-child {
    @media (max-width: 767px) {
      max-width: 200px;
    }
  }
`
