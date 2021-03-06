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
`
