import styled from "styled-components"

export const StyledSpanElipse = styled.span`
  display: block;
  width: 106px;
  height: 106px;
  background-color: var(--accent);
  border-radius: 50%;
  @media only screen and (max-width: 400px) {
    width: 92px;
    height: 92px;
  }
  @media only screen and (max-width: 366px) {
    width: 82px;
    height: 82px;
  }
  @media only screen and (max-width: 346px) {
    width: 76px;
    height: 76px;
  }
`
