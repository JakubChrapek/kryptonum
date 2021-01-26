import styled from "styled-components"

export const StyledSection = styled.section`
  max-width: 1366px;
  margin: 0 auto;
  padding: 0;
`
export const SectionInfoTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 110px 140px;
  > h3 {
    font-family: Poppins;
    font-size: 40px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.28;
    letter-spacing: normal;
    text-align: left;
    color: var(--black);
    position: relative;
    &::after {
      content: "";
      width: 110%;
      height: 2.8px;
      background-color: var(--black);
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }
  > p {
    max-width: 506px;
    font-family: JetBrainsMono;
    font-size: 18px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.28;
    letter-spacing: 2.57px;
    color: var(--dark-bg);
  }
`
export const ContentWrapper = styled.section``
