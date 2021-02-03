import React from "react"

import { ServicesWrapper } from "../../atoms/Services/ServicesWrapper/ServicesWrapper"
import { ServicesStyles } from "../../atoms/Services/ServicesStyles/ServicesStyles"
import { ServicesStylesH2 } from "../../atoms/Services/ServicesStyles/ServicesStylesH2"
const MainServices = () => {
  return (
    <ServicesStyles id="whatwereupto">
      <ServicesStylesH2
        fontFamily="JetBrains Mono"
        fontSize="14px"
        lineHeight="1.25"
        color="var(--black)"
        textAlign="center"
        letterSpacing="2.29px"
        textTransform="uppercase"
        declaredPadding="0 0 20px 0"
        fontWeight="bold"
      >
        Our main services
      </ServicesStylesH2>
      <ServicesWrapper>
        <li>
          <h3>Design</h3>
        </li>
        <li>
          <h3>SEO</h3>
        </li>
        <li>
          <h3>Branding</h3>
        </li>
        <li>
          <h3>Media</h3>
        </li>
      </ServicesWrapper>
      <ServicesWrapper>
        <li>
          <h3>Marketing</h3>
        </li>
        <li>
          <h3>Strategy</h3>
        </li>
        <li>
          <h3 className="underline">Development</h3>
        </li>
      </ServicesWrapper>
    </ServicesStyles>
  )
}

export default MainServices
