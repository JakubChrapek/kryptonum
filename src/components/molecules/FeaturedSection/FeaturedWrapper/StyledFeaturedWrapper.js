import styled from "styled-components"

export const StyledFeaturedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  span {
    font-size: 40px;
    line-height: 1.5em;
    position: relative;
    margin-left: ${({ hasMarginLeft }) => (hasMarginLeft ? "57px" : "0")};
    @media only screen and (max-width: 1183px) {
      font-size: ${({ aboutSlider }) => (aboutSlider ? "35px" : "40px")};
    }
    @media only screen and (max-width: 759px) {
      font-size: ${({ aboutSlider }) => (aboutSlider ? "30px" : "40px")};
    }
    @media only screen and (max-width: 374px) {
      font-size: ${({ aboutSlider }) => (aboutSlider ? "24px" : "40px")};
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
      z-index: -1;
    }

    &:nth-child(2):after {
      width: ${({ secondSpanLength }) =>
        secondSpanLength ? secondSpanLength : "100%"};
    }
  }
`
