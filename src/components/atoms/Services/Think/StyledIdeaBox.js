import styled from "styled-components"

export const StyledIdeaBox = styled.div`
  /* margin-left: 140px; */
  position: absolute;
  left: 50%;
  transform: translate(-50%, 10px);
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
