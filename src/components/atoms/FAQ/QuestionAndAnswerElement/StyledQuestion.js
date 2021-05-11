import styled from "styled-components"
import { StyledAddIcon } from "./StyledAddIcon"

export const StyledQuestion = styled.h4`
  font-family: "JetBrains Mono";
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.14;
  letter-spacing: normal;
  color: var(--black);
  padding: 28px 16px 46px 14px;
  flex: 1 1 100%;
  @media only screen and (max-width: 767px) {
    padding: 28px 16px 40px 14px;
  }
  @media only screen and (max-width: 400px) {
    padding-left: 0;
  }
  @media only screen and (max-width: 330px) {
    padding-right: 0;
  }
  &:hover + ${StyledAddIcon} {
    > span:before,
    > span:after {
      background-color: var(--accent);
    }
  }
`
