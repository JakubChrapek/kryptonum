import React from "react"
import styled from "styled-components"
import { StructuredText } from "react-datocms"
import { GatsbyImage } from "gatsby-plugin-image"
import {
  CURSOR_SIZES,
  CURSOR_TEXT,
  CURSOR_TYPES,
  useCursorDispatchContext,
} from "../../../contexts/cursorContext"

const Wrapper = styled.section`
  background-color: var(--white);
  width: 100%;
`

const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding: clamp(172px, 19.6vw, 283px) clamp(91px, 7.77vw, 112px) 0;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1024px) {
    max-width: 768px;
    padding: 172px clamp(16px, 9vw, 92px) 0;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  @media (max-width: 640px) {
    padding: 172px 16px 0;
  }

  > .gatsby-image-wrapper {
    flex: 1 1 40%;

    @media (max-width: 1024px) {
      width: calc(100% - clamp(24px, 4.5vw, 47px));
      margin-bottom: 56px;
      order: -1;
    }
    @media (max-width: 640px) {
      width: 100%;
    }
  }
`

const TextContainer = styled.div`
  flex: 1 1 60%;
  padding-right: clamp(80px, 12.22vw, 176px);
  @media (max-width: 1024px) {
    padding-right: 0;
    width: 100%;
  }
  > p {
    color: var(--black);
    line-height: 1.5;
    max-width: clamp(360px, 38.2vw, 551px);
    @media (max-width: 1024px) {
      max-width: clamp(240px, 77.1vw, 551px);
    }
    @media (max-width: 384px) {
      max-width: 100%;
    }
    :nth-of-type(1) {
      font-size: 13px;
      text-transform: uppercase;
      margin-bottom: 16px;
    }
    :nth-of-type(2) {
      color: var(--off-black);
      font-size: clamp(32px, 3.33vw, 48px);
      font-weight: 500;
      @media (max-width: 1024px) {
        font-size: clamp(28px, 6.225vw, 48px);
      }
      margin-bottom: 48px;
      @media (max-width: 767px) {
        margin-bottom: 32px;
      }
    }
  }
  > button {
    width: clamp(340px, 36.1vw, 520px);
    @media (max-width: 1024px) {
      width: 100%;
    }
    font-size: 18px;
    line-height: 1.5;
    letter-spacing: 0.72px;
    color: var(--off-black);
    background-color: var(--button-accent);
    padding: 16px 4px;
    border: none;
    font-size: 18px;
    font-weight: 500;
    &:focus,
    &:active,
    &:hover {
      outline: none;
    }
    &:focus {
      outline-offset: 2px;
      outline: 2px solid var(--button-accent);
    }
  }
`

const OfferButton = styled.button``

const OfferHeroSection = ({ headerText, claimText, btnText, heroImage }) => {
  const dispatchCursor = useCursorDispatchContext()

  return (
    <Wrapper>
      <Container>
        <TextContainer>
          <StructuredText data={headerText} />
          <StructuredText data={claimText} />
          <OfferButton
            type="submit"
            onMouseEnter={() => {
              dispatchCursor({
                type: "CHANGE_CURSOR_TYPE",
                cursorType: CURSOR_TYPES.TRANSPARENT_TEXT,
              })
              dispatchCursor({
                type: "CHANGE_CURSOR_SIZE",
                cursorSize: CURSOR_SIZES.HUGE,
              })
              dispatchCursor({
                type: "CHANGE_CURSOR_TEXT",
                cursorText: CURSOR_TEXT.COLLAPSE,
              })
            }}
            onMouseLeave={() => {
              dispatchCursor({
                type: "CHANGE_CURSOR_TYPE",
                cursorType: CURSOR_TYPES.FULL_CURSOR,
              })
              dispatchCursor({
                type: "CHANGE_CURSOR_SIZE",
                cursorSize: CURSOR_SIZES.SMALLER,
              })
            }}
          >
            {btnText}
          </OfferButton>
        </TextContainer>
        <GatsbyImage image={heroImage} />
      </Container>
    </Wrapper>
  )
}

export default OfferHeroSection
