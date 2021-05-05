import styled from "styled-components"

export const StyledFeaturedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 41px;
  @media only screen and (max-width: 767px) {
    padding-left: ${({ howWeWorkHeader }) => (howWeWorkHeader ? "20px" : "0")};
    margin-top: ${({ howWeWorkHeader }) => howWeWorkHeader && "40px"};
  }
  span {
    font-size: ${({ mainHeader }) => (mainHeader ? "52px" : "40px")};
    line-height: ${({ mainHeader }) => (mainHeader ? "1.31em" : "1.5em")};
    position: relative;
    @media only screen and (max-width: 1183px) {
      font-size: ${({ aboutSlider }) => (aboutSlider ? "35px" : "36px")};
    }
    @media only screen and (max-width: 767px) {
      font-size: ${({ aboutSlider }) => (aboutSlider ? "30px" : "32px")};
    }
    @media only screen and (max-width: 559px) {
      margin-left: ${({ hasMarginLeft }) => (hasMarginLeft ? "27px" : "0")};
    }
    @media only screen and (max-width: 540px) {
      font-size: ${({ aboutSlider, mainHeader }) =>
        aboutSlider ? "30px" : mainHeader ? "52px" : "40px"};
    }
    @media only screen and (max-width: 484px) {
      font-size: ${({ hasSmalFontSize, mainHeader }) =>
        hasSmalFontSize ? "28px" : mainHeader ? "52px" : "40px"};
    }
    @media only screen and (max-width: 399px) {
      font-size: ${({ hasSmalFontSize, mainHeader }) =>
        hasSmalFontSize ? "26px" : mainHeader ? "46px" : "40px"};
    }
    @media only screen and (max-width: 360px) {
      font-size: ${({ hasSmalFontSize, mainHeader }) =>
        hasSmalFontSize ? "26px" : mainHeader ? "46px" : "38px"};
    }
    &:after {
      content: "";
      position: absolute;
      bottom: -3px;
      left: 0;
      width: ${({ firstSpanLength }) =>
        firstSpanLength ? firstSpanLength : "100%"};
      background-color: var(--black);
      height: 3px;
      z-index: 0;
    }

    &:nth-child(2):after {
      width: ${({ secondSpanLength }) =>
        secondSpanLength ? secondSpanLength : "100%"};
    }
  }
`
