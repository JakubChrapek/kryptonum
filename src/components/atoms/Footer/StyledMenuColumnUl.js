import styled from "styled-components"

export const StyledMenuColumnUl = styled.ul`
  display: flex;
  flex-direction: column;
  margin-right: 70px;
  @media (max-width: 1154px) {
    margin-right: 40px;
  }
  @media (max-width: 912px) {
    margin-right: 15px;
  }
  @media (max-width: 795px) {
    margin-top: 18px;
  }
  @media (max-width: 413px) {
    margin: 41px 38px 41px 0;
  }
  &:last-child {
    @media (max-width: 1154px) {
      margin-right: 80px;
    }
    @media (max-width: 968px) {
      margin-right: 30px;
    }
    @media (max-width: 912px) {
      margin-right: 0;
    }
  }

  li {
    margin-top: 7px;
    &:first-child {
      margin-top: 0;
    }
  }
`
