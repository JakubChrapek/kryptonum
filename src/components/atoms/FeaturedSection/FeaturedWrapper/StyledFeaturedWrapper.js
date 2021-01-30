import styled from "styled-components"

export const StyledFeaturedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  span {
    font-size: 40px;
    line-height: 1.5em;
    position: relative;
    margin-left: ${({ aboutSlider }) => (aboutSlider ? "0" : "57px")};
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
      width: ${({ hasDeclaredWidth }) =>
        hasDeclaredWidth ? "100%" : "calc(100% + 28px)"};
      background-color: var(--black);
      height: 3px;
      z-index: -1;
    }

    &:last-child:after {
      width: ${({ hasDeclaredWidth }) =>
        hasDeclaredWidth ? "50%" : "calc(100% + 28px)"};
    }
  }
`
