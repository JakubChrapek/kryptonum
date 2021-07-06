import styled from "styled-components"

export const SectionStyles = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 109px 100px 94px;
  max-width: 1366px;
  margin: 0 auto;
  @media (max-width: 1090px) {
    padding: 109px 80px 94px;
  }
  @media (max-width: 890px) {
    padding: 76px 40px 60px;
  }
  @media (max-width: 500px) {
    padding: 76px 28px 60px;
  }
`
