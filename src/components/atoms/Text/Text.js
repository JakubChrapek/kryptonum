import styled from "styled-components"
import { motion } from "framer-motion"

export const TextStyles = styled(motion.p)`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "1.6rem")};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "400")};
  letter-spacing: ${({ letterSpacing }) =>
    letterSpacing ? letterSpacing : "0"};
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : "1.3em")};
  color: ${({ color }) => (color ? color : "var(--black)")};
  text-transform: ${({ textTransform }) =>
    textTransform ? textTransform : "none"};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "left")};
  padding: ${({ declaredpadding }) =>
    declaredpadding ? declaredpadding : "0"};
  border-top: ${({ declaredBorderTop }) =>
    declaredBorderTop ? declaredBorderTop : "0"};
  margin: ${({ declaredMargin }) => (declaredMargin ? declaredMargin : "0")};
  width: ${({ declaredWidth }) => (declaredWidth ? declaredWidth : "auto")};
  display: ${({ declaredDisplay }) =>
    declaredDisplay ? declaredDisplay : "block"};
  transform: ${({ declaredTransform }) =>
    declaredTransform ? declaredTransform : "translate(0,0)"};
  @media only screen and (max-width: 1228px) {
    font-size: ${({ slideText, fontSize }) => (slideText ? "24px" : fontSize)};
  }
  @media only screen and (max-width: 1160px) {
    font-size: ${({ slideText, styledAboutBestWayWrapper, fontSize }) =>
      slideText || styledAboutBestWayWrapper ? "24px" : fontSize};
  }
  @media only screen and (max-width: 1080px) {
    font-size: ${({ slideText, fontSize }) => (slideText ? "20px" : fontSize)};
    margin: ${({ slideText }) => slideText && "18px 0 0"};
  }
  @media only screen and (max-width: 767px) {
    font-size: ${({ slideText, styledAboutBestWayWrapper, fontSize }) =>
      slideText ? "22px" : styledAboutBestWayWrapper ? "20px" : fontSize};
    line-height: ${({ styledAboutBestWayWrapper, lineHeight }) =>
      styledAboutBestWayWrapper ? "1.81" : lineHeight};
  }
  @media only screen and (max-width: 600px) {
    font-size: ${({
      slideText,
      name,
      specialty,
      styledAboutBestWayWrapper,
      fontSize,
    }) =>
      name
        ? "15px"
        : specialty
        ? "12px"
        : slideText
        ? "20px"
        : styledAboutBestWayWrapper
        ? "16px"
        : fontSize};
  }
  @media only screen and (max-width: 500px) {
    display: ${({ howWeWorkSection }) => (howWeWorkSection ? "none" : "block")};
    font-size: ${({
      slideText,
      name,
      specialty,
      fontSize,
      styledAboutBestWayWrapper,
    }) =>
      name
        ? "15px"
        : specialty
        ? "12px"
        : slideText
        ? "16px"
        : styledAboutBestWayWrapper
        ? "16px"
        : fontSize};
  }
  a {
    color: var(--black);
    text-decoration: none;
    position: relative;
    font-weight: 500;

    &:after {
      content: "";
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 100%;
      height: 1px;
      transform-origin: center bottom;
      transition: opacity 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53),
        transform 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53);
      background-color: var(--black);
    }

    &:focus-visible {
      outline-offset: 1px;
      outline: 2px solid var(--black);
    }

    &:hover:after {
      transform: scaleY(2);
      opacity: 1;
    }
  }
`
