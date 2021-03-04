import styled from "styled-components"

export const StyledLearnWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 816px) {
    justify-content: center;
    flex-direction: column;
  }
`