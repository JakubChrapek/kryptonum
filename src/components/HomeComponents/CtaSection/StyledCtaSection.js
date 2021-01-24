import styled from "styled-components"

export const Wrapper = styled.section`
  background-color: var(--dark-bg);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SectionStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 102px 151px;
  width: 100%;
  max-width: 1366px;
  margin: 0 auto;

  @media only screen and (max-width: 1366px) {
    padding: 102px 114px;
  }
  @media only screen and (max-width: 1090px) {
    padding: 102px 90px;
  }
  @media only screen and (max-width: 857px) {
    align-items: center;
  }
  h2 {
    font-family: "Libre Baskerville";
    font-size: 70px;
    font-weight: normal;
    line-height: 1.38;
    letter-spacing: -1.75px;
    color: var(--white);
    @media only screen and (max-width: 970px) {
      font-size: 6vw;
    }
    @media only screen and (max-width: 857px) {
      text-align: center;
    }
    @media only screen and (max-width: 670px) {
      font-size: 30px;
    }
    @media only screen and (max-width: 520px) {
    }
    span {
      @media only screen and (max-width: 570px) {
        line-height: 2em;
        min-width: 318px;
      }
      :first-child {
        color: var(--accent);
        position: relative;
        &:after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 105%;
          height: 2px;
          background-color: var(--accent);
        }
      }

      :last-child {
        @media only screen and (max-width: 570px) {
          display: block;
        }
      }
    }
  }
  a {
    margin: 48px 0 0;
    display: inline-block;
    button {
      min-width: 290px;
    }
  }
`
