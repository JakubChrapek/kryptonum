import styled from "styled-components"

export const FeaturedSectionWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 50px;
  width: 100%;
  @media only screen and (max-width: 738px) {
    flex-direction: column;
    align-items: flex-start;
  }
  @media only screen and (max-width: 500px) {
    margin-top: 0;
  }
`
