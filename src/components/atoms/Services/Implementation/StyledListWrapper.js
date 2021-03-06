import styled from "styled-components"

export const StyledListWrapper = styled.div`
  width: 100%;
  ul {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-top: 86px;
    @media only screen and (max-width: 767px) {
      flex-direction: column;
      align-items: center;
    }
    @media only screen and (max-width: 528px) {
      padding-top: 16px;
    }
    li {
      font-family: Poppins;
      font-size: 12px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.5;
      letter-spacing: 2px;
      color: var(--black);
      @media only screen and (max-width: 767px) {
        padding-bottom: 15px;
        &:last-child {
          padding-bottom: 0;
        }
      }
    }
  }
`
