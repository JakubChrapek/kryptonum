import styled from "styled-components"

export const SectionStyles = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 109px 82px 94px;
  max-width: 1366px;
  margin: 0 auto;
  @media only screen and (max-width: 560px) {
    padding: 76px 20px 60px 20px;
  }
  div {
    display: flex;
    align-items: center;
    width: 100%;
    @media only screen and (max-width: 560px) {
      margin-left: 0;
    }
  }

  span {
    font-size: 40px;
    line-height: 1.5em;
    position: relative;
    margin-left: 57px;
    &:after {
      content: "";
      position: absolute;
      bottom: -3px;
      left: 0;
      width: calc(100% + 28px);
      background-color: var(--black);
      height: 3px;
      z-index: -1;
    }

    &:last-child:after {
      width: calc(100% + 64px);
    }
  }
`

export const FeaturedWrapper = styled.div`
  display: flex;
  flex-direction: column !important;
  align-items: flex-start !important;
  margin: 0 !important;
  width: 50% !important;
`
