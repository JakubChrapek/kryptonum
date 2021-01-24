import React from "react"

import { ServicesStyles, ServicesWrapper } from "./StyledMainServices"

const MainServices = () => {
  return (
    <ServicesStyles id="whatwereupto">
      <h2>Our main services</h2>
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
