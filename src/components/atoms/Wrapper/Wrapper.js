import styled from "styled-components"

export const Wrapper = styled.div`
  width: 100%;
  background-color: ${({ bg }) => (bg ? bg : "")};
  display: flex;
  flex-direction: ${({ direction }) => (direction ? direction : "row")};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "1366px")};
  padding: ${({ padding }) => (padding ? padding : "0")};
`

export const BgColourWrapper = styled.div`
  background-color: ${({ bg }) => bg};
`
