import styled from "styled-components"

export const StyledCopyrightWrapperDiv = styled.div`
  display: flex;
  @media (max-width: 767px) {
    flex-wrap: wrap;
  }
  &:first-child {
    @media (max-width: 767px) {
      margin-top: 66px;
      order: 2;
    }
    > span {
      &::after {
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
