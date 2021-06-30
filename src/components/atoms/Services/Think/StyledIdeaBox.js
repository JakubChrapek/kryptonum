import styled from "styled-components"

export const StyledIdeaBox = styled.div`
  /* margin-left: 140px; */
  position: absolute;
  left: 47.5%;
  border-radius: 50%;
  transform: translate(-50%, 114px);
  display: block;
  @media (max-width: 1168px) and (min-width: 768px) {
    display: none;
  }
  @media (max-width: 767px) {
    position: relative;
    left: unset;
    transform: none;
  }
`
