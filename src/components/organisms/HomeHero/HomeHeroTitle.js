import styled from "styled-components"
import { StructuredText } from "react-datocms"

export const HomeHeroTitleStyles = styled.div`
  > p {
    font-size: clamp(40px, 6vw, 96px);
    font-weight: 300;
    line-height: 1.5;
    color: var(--lightest-gray);
    @media (max-width: 1140px) {
      font-size: clamp(40px, 7vw, 96px);
    }
    @media (max-width: 767px) {
      font-size: clamp(36px, 10.5vw, 60px);
    }
  }
`

export const HomeHeroTitle = styled(StructuredText)``
