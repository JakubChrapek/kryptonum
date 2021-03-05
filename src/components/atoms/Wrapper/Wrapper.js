import styled, { css } from "styled-components"

export const Wrapper = styled.div`
  width: 100%;
  background-color: ${({ bg }) => (bg ? bg : "")};
  display: flex;
  flex-direction: ${({ direction }) => (direction ? direction : "row")};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "1366px")};
  padding: ${({ padding }) => (padding ? padding : "0")};
  ${({ variant }) =>
    variant === "blog" &&
    css`
      @media (max-width: 1025px) {
        padding: 75px 62px 80px;
      }
      @media (max-width: 767px) {
        max-width: 600px;
      }
      @media (max-width: 600px) {
        max-width: unset;
      }
      @media (max-width: 500px) {
        padding: 44px 20px 74px;
      }
    `}
`

export const BgColourWrapper = styled.div`
  background-color: ${({ bg }) => bg};
`
