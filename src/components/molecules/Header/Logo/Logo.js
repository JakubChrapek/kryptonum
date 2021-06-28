import React from "react"
import styled from "styled-components"

import { StyledLogoTitle } from "../../../atoms/Header/Logo/StyledLogoTitle"
import { KryptonumLogoSygnet } from "../../../atoms/Icons/Icons"

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`

const Logo = ({ color, sygnetVariant }) => (
  <LogoWrapper>
    <KryptonumLogoSygnet variant={sygnetVariant} />
    <StyledLogoTitle color={color}>Kryptonum</StyledLogoTitle>
  </LogoWrapper>
)

export default Logo
