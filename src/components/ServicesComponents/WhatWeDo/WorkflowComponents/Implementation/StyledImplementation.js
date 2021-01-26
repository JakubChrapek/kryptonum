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
  li {
    font-family: Poppins;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: 2px;
    color: var(--black);
  }
`

export const StyledImplementationContentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`
export const CommunicationWithTheClientWrapper = styled.div`
  padding: 138px 0;
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
  }
`
export const ArrowWrapper = styled.div`
  padding-top: 91px;
`
export const StyledArrow = styled(IoIosArrowRoundDown)`
  padding: 0;
  margin: 0;
`
