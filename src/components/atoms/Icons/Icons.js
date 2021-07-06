import React from "react"
import styled from "styled-components"

const LogoStyles = styled.svg`
  height: 4rem;
  @media (max-width: 653px) {
    height: 3.2rem;
  }
`

export const KryptonumLogoSygnet = ({ variant = "light" }) => (
  <LogoStyles
    id="Warstwa_1"
    dataName="Warstwa 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1000 1000"
  >
    <path
      fill="var(--accent)"
      class="cls-1"
      d="M617.77,500a150.78,150.78,0,0,1-90.38,138.13h0V891.65H406.88V638.06h0a150.64,150.64,0,0,1,0-276.12h0V108.35H527.39V361.87h0A150.7,150.7,0,0,1,617.77,500Z"
    />
    <path
      fill="var(--accent)"
      class="cls-1"
      d="M834.09,103V283.76L708.23,409.62,648,349.36l-38.79,38.79A181.52,181.52,0,0,0,579.06,358Z"
    />
    <path
      fill="var(--accent)"
      class="cls-1"
      d="M708.23,590.38,834.09,716.24V897l-255-255a181.52,181.52,0,0,0,30.13-30.12L648,650.64Z"
    />
    <path
      fill={variant === "light" ? "var(--white)" : "var(--black)"}
      class="cls-2"
      d="M286.42,500a179.71,179.71,0,0,0,38.77,111.83s0,0,0,0L165.91,771.14V590.38l60.26-60.25V469.87l-60.26-60.25V228.86L325.19,388.14a0,0,0,0,1,0,0A179.68,179.68,0,0,0,286.42,500Z"
    />
  </LogoStyles>
)
const ArrowStyles = styled.svg`
  margin: ${({ margin }) => (margin ? margin : "undefined")};
  path {
    fill: var(--accent);
  }
`
export const ArrowDown = ({ margin }) => (
  <ArrowStyles
    margin={margin}
    width="43"
    height="62"
    viewBox="0 0 43 62"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M42.665 40.946L39.528 38.287C39.528 38.287 28.234 49.455 23.842 54.241C24.017 37.449 23.842 0 23.842 0L20.077 0C20.077 0 20.214 37.46 20.077 54.241C15.058 49.455 3.76504 38.287 3.76504 38.287L3.8147e-05 40.946L21.96 61.153L42.665 40.946Z" />
  </ArrowStyles>
)
