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

  @media (max-width: 767px) {
    margin-right: 54px;
    &:last-of-type {
      margin-top: 55px;
    }
  }
  @media (max-width: 441px) {
    margin-right: 36px;
  }
  @media (max-width: 354px) {
    &:nth-of-type(2) {
      margin-top: 55px;
    }
  }
  @media (max-width: 305px) {
    margin-right: 24px;
  }
`
