import { AnimateSharedLayout, motion } from "framer-motion"
import { useStaticQuery, graphql } from "gatsby"
import { StructuredText } from "react-datocms"
import React from "react"
import styled from "styled-components"
import {
  CURSOR_COLORS,
  CURSOR_SIZES,
  CURSOR_TYPES,
  useCursorDispatchContext,
} from "../../../contexts/cursorContext"
import { TextStyles } from "../../atoms/Text/Text"
import FeedbackSlider from "./FeedbackSlider"

const FeedbackFromWrapper = styled.div`
  width: 100%;
  background-color: var(--white);
  padding: 142px 112px;
  height: 100vh;
  position: relative;
  margin: 0 auto;

  @media only screen and (min-width: 1920px) {
    max-height: 860px;
  }
  @media only screen and (min-width: 1600px) {
    max-height: 760px;
  }
  @media only screen and (max-width: 1366px) {
    padding: 104px 82px 108px 82px;
  }
  @media only screen and (max-width: 1168px) {
    max-height: 820px;
  }
  @media only screen and (max-width: 767px) {
    padding: 84px 28px;
  }
`

const FeedbackWrapper = styled.section`
  display: grid;
  height: 100%;
  background-color: var(--white);
  grid-template-areas:
    "title content content content content"
    "title content content content content"
    "title content content content content"
    "title content content content content";
  grid-gap: 20px 100px;
  max-width: 1366px;
  margin: 0 auto;
  @media (max-width: 1024px) {
    grid-gap: 12px 40px;
  }
  @media (max-width: 767px) {
    grid-gap: 32px 0px;
    grid-template-areas:
      "title"
      "content"
      "content"
      "content"
      "content";
  }
`

const TitleWrapper = styled(motion.div)`
  display: flex;
  grid-area: title;
`

const FeedbackFrom = ({ feedbackFromClients, feedbackTytul }) => {
  const dispatchCursor = useCursorDispatchContext()
  const data = useStaticQuery(graphql`
    query FeedbackQuery {
      allDatoCmsFeedbackFromClient(filter: { locale: { eq: "pl" } }) {
        nodes {
          id
          clientName
          feedback {
            blocks
            links
            value
          }
        }
      }
    }
  `)

  return (
    <FeedbackFromWrapper
      onMouseEnter={() => {
        dispatchCursor({
          type: "CHANGE_CURSOR_TYPE",
          cursorType: CURSOR_TYPES.FULL_CURSOR,
        })
        dispatchCursor({
          type: "CHANGE_CURSOR_COLOR",
          cursorColor: CURSOR_COLORS.DARK,
        })
        dispatchCursor({
          type: "CHANGE_CURSOR_SIZE",
          cursorSize: CURSOR_SIZES.SMALLER,
        })
      }}
    >
      <AnimateSharedLayout type="crossfade">
        <FeedbackWrapper>
          <TitleWrapper>
            <TextStyles
              fontSize="18px"
              fontWeight="500"
              lineHeight="1.28"
              letterSpacing="2.57px"
              as="h3"
            >
              <StructuredText data={feedbackTytul} />
            </TextStyles>
          </TitleWrapper>
          <FeedbackSlider slides={data.allDatoCmsFeedbackFromClient.nodes} />
        </FeedbackWrapper>
      </AnimateSharedLayout>
    </FeedbackFromWrapper>
  )
}

export default FeedbackFrom
