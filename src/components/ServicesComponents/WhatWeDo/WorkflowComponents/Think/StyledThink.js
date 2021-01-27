import styled from "styled-components"

export const StyledIdeaBox = styled.div`
  margin-left: 140px;
  @media only screen and (max-width: 1200px) {
    margin-left: 60px;
  }
  @media only screen and (max-width: 1200px) {
    margin-left: 60px;
  }
  @media only screen and (max-width: 1200px) {
    margin-left: 10px;
    margin-right: 10px;
  }
  p {
    width: 269px;
    height: 269px;
    font-family: Poppins;
    font-size: 40px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.48;
    letter-spacing: normal;
    color: var(--black);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: var(--accent);
    @media only screen and (max-width: 1200px) {
      width: 209px;
      height: 209px;
    }
    @media only screen and (max-width: 892px) {
      width: 269px;
      height: 269px;
    }
    @media only screen and (max-width: 816px) {
      margin: 35px 0 57px 0;
    }
    @media only screen and (max-width: 400px) {
      width: 239px;
      height: 239px;
    }
  }
`
export const ThinkTextWrapper = styled.div`
  max-width: 300px;
  @media only screen and (max-width: 816px) {
    margin-bottom: 70px;
  }
  h3 {
    font-family: LibreBaskerville;
    font-size: 36px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.25;
    letter-spacing: -0.94px;
    color: var(--gray);
    span {
      display: block;
    }
  }
  p {
    margin-top: 27px;
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
