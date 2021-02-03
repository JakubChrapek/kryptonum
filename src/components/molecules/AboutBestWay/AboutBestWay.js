import React from "react"

import { StyledBestWayWrapper } from "../../atoms/AboutBestWay/StyledBestWayWrapper"
import { TextStyles } from "../../atoms/Text/Text"

const AboutBestWay = ({ textContent }) => {
  return (
    <StyledBestWayWrapper>
      <TextStyles
        fontSize="28px"
        fontWeight="normal"
        lineHeight="1.71"
        textAlign="center"
        color="var(--black-font)"
        fontFamily="Poppins"
        styledAboutBestWayWrapper={true}
      >
        {textContent}
      </TextStyles>
    </StyledBestWayWrapper>
  )
}

export default AboutBestWay
