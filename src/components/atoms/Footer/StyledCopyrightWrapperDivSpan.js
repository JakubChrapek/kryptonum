import styled from "styled-components"

export const StyledCopyrightWrapperDivSpan = styled.span`
  font-family: "Poppins";
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5em;
  letter-spacing: normal;
  color: var(--light-gray);
  letter-spacing: 2px;
  position: relative;
  @media (max-width: 802px) {
    font-size: 10px;
  }
  @media (max-width: 795px) {
    font-size: 12px;
  }
  &::after {
    content: "";
    width: 50px;
    height: 2px;
    margin-left: 9px;
    background-color: var(--accent);
    display: inline-block;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
`
