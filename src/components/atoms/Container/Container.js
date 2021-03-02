import styled from "styled-components"

export const Container = styled.div`
  background-color: ${({ bg }) => (bg ? bg : "")};
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`
