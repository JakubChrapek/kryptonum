import styled from "styled-components"

export const StyledContactInfo = styled.div`
  padding: 28px 13px;
  max-width: 364px;
  background-color: var(--white);
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media only screen and (max-width: 870px) {
    width: 100%;
    margin: 0 0 80px;
    padding: 32px 13px;
  }
  @media only screen and (max-width: 520px) {
    width: 100%;
    max-width: 100%;
    padding: 32px 24px;
  }

  > p {
    font-size: 16px;
    line-height: 1.38;
    color: var(--dark-bg);
    margin-bottom: 3.6rem;
  }
`
