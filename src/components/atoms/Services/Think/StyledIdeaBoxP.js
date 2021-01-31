import styled from "styled-components"

export const StyledIdeaBoxP = styled.p`
  width: 269px;
  height: 269px;
  font-family: Poppins;
  font-size: 40px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.48;
  letter-spacing: normal;
  color: var(--black);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: var(--accent);
  @media only screen and (max-width: 1200px) {
    width: 209px;
    height: 209px;
  }
  @media only screen and (max-width: 892px) {
    width: 269px;
    height: 269px;
  }
  @media only screen and (max-width: 816px) {
    margin: 35px 0 57px 0;
  }
  @media only screen and (max-width: 400px) {
    width: 239px;
    height: 239px;
  }
`
