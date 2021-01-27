import styled from "styled-components"
import { IoIosArrowRoundDown } from "react-icons/io"

export const StyledListWrapper = styled.div`
  width: 100%;
`
export const StyledImplementationUl = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: 33px;
  @media only screen and (max-width: 816px) {
    flex-direction: column;
    align-items: center;
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
    @media only screen and (max-width: 816px) {
      padding-bottom: 17px;
      &:last-child {
        padding-bottom: 0;
      }
    }
  }
`

export const StyledImplementationContentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 1264px) {
    flex-direction: column;
  }
`
export const CommunicationWithTheClientWrapper = styled.div`
  padding: 138px 0;
  @media only screen and (max-width: 1264px) {
    padding: 60px 0;
  }
  p {
    max-width: 518px;
    font-family: Poppins;
    font-size: 28px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.71;
    letter-spacing: normal;
    color: #090909;
    @media only screen and (max-width: 1336px) {
      font-size: 22px;
    }
    @media only screen and (max-width: 1264px) {
      margin: 0 auto;
      text-align: center;
    }
    @media only screen and (max-width: 522px) {
      font-size: 16px;
    }
  }
`
export const LongLastingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-family: Poppins;
    font-size: 40px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.48;
    letter-spacing: normal;
    color: var(--black);
    transform: translateY(-20px);
    @media only screen and (max-width: 1336px) {
      font-size: 34px;
      transform: translateY(-10px);
    }
    @media only screen and (max-width: 1264px) {
      padding: 0 0 163px 0;
    }
    @media only screen and (max-width: 522px) {
      font-size: 30px;
      text-align: center;
      line-height: 1.67;
    }
  }
`
export const ArrowWrapper = styled.div`
  padding-top: 91px;
  @media only screen and (max-width: 1264px) {
    padding-top: 0;
  }
  @media only screen and (max-width: 816px) {
    padding-bottom: 37px;
  }
`
export const StyledArrow = styled(IoIosArrowRoundDown)`
  padding: 0;
  margin: 0;
`
