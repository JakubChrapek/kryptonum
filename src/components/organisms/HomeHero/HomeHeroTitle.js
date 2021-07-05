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
    /* @media (max-width: 1101px) {
      font-size: 64px;
    }
    @media (max-width: 868px) {
      font-size: 50px;
    }
    @media (max-width: 683px) {
      font-size: 36px;
      line-height: 50px;
    }
    @media (max-width: 401px) {
      font-size: 34px;
    }
    @media (max-width: 383px) {
      font-size: 32px;
    }
    @media (max-width: 383px) {
      font-size: 29px;
    }
    @media (max-width: 349px) {
      font-size: 36px;
    } */
  }
`

export const HomeHeroTitle = styled(StructuredText)``
