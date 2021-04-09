import styled from "styled-components"
import { motion } from "framer-motion"

export const TextStyles = styled(motion.p)`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "1.6rem")};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "400")};
  letter-spacing: ${({ letterSpacing }) =>
    letterSpacing ? letterSpacing : "0"};
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : "1.3em")};
  font-family: ${({ fontFamily }) =>
    fontFamily ? fontFamily : "JetBrains Mono"};
  color: ${({ color }) => (color ? color : "var(--black)")};
  text-transform: ${({ textTransform }) =>
    textTransform ? textTransform : "none"};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "left")};
  padding: ${({ declaredPadding }) =>
    declaredPadding ? declaredPadding : "0"};
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
  @media only screen and (max-width: 759px) {
    font-size: ${({ styledAboutBestWayWrapper, fontSize }) =>
      styledAboutBestWayWrapper ? "20px" : fontSize};
    line-height: ${({ styledAboutBestWayWrapper, lineHeight }) =>
      styledAboutBestWayWrapper ? "1.81" : lineHeight};
  }
  @media only screen and (max-width: 600px) {
    font-size: ${({ styledAboutBestWayWrapper, fontSize }) =>
      styledAboutBestWayWrapper ? "16px" : fontSize};
  }
  @media only screen and (max-width: 500px) {
    display: ${({ howWeWorkSection }) => (howWeWorkSection ? "none" : "block")};
  }
`
