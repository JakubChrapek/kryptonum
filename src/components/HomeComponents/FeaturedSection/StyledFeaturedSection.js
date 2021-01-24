import styled from "styled-components"

export const SectionStyles = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 123px 133px 141px;
  max-width: 1366px;
  margin: 0 auto;

  @media only screen and (max-width: 1366px) {
    padding: 0 93px 133px 111px;
  }
  @media only screen and (max-width: 1090px) {
    padding: 0 60px 110px 80px;
  }
  /* @media only screen and (max-width: 784px) {
    align-items: center;
  } */
  @media only screen and (max-width: 738px) {
    padding: 0 60px 80px 80px;
  }
  @media only screen and (max-width: 500px) {
    padding: 55px 60px 55px 20px;
  }
  h2 {
    text-transform: uppercase;
    font-size: 8px;
    line-height: 1.5em;
    letter-spacing: 1.33px;
    font-family: "Poppins";
    @media only screen and (max-width: 500px) {
      display: none;
    }
  }
  div {
    display: flex;
    align-items: center;
    margin-top: 50px;
    width: 100%;
    @media only screen and (max-width: 738px) {
      flex-direction: column;
      align-items: flex-start;
    }
    @media only screen and (max-width: 500px) {
      margin-top: 0;
    }
  }

  ul {
    margin-top: 12px;
    @media only screen and (max-width: 500px) {
      display: none;
    }
  }

  h3 {
    font-size: 13px;
    line-height: 3.62;
    letter-spacing: 19.5px;
    text-transform: uppercase;
    font-family: "JetBrains Mono";
  }

  span {
    font-size: 52px;
    line-height: 1.35em;
    position: relative;

    &:after {
      content: "";
      position: absolute;
      bottom: -3px;
      left: 0;
      width: calc(100% - 19px);
      background-color: var(--black);
      height: 4px;
      z-index: -1;
    }
    &:last-child {
      &:after {
        width: calc(100% + 80px);
      }
    }
  }
`

export const FeaturedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start !important;
  margin: 0 !important;
  width: 50% !important;
`
