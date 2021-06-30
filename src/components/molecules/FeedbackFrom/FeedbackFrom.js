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
  padding: 113px 112px 141px 112px;
  position: relative;
  margin: 0 auto;

  /* @media only screen and (min-width: 1920px) {
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
  } */
`

const FeedbackWrapper = styled.section`
  display: grid;
  height: 100%;
  background-color: var(--white);
  grid-template-columns: 280px 1fr;
  max-width: 1366px;
  margin: 0 auto;
`

const TitleWrapper = styled(motion.div)`
  display: flex;
  /* grid-area: title; */
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
      <FeedbackWrapper>
        <TitleWrapper>
          <TextStyles
            fontSize="16px"
            fontWeight="400"
            lineHeight="2.12"
            letterSpacing="0.35em"
            as="h3"
          >
            <StructuredText data={feedbackTytul} />
          </TextStyles>
        </TitleWrapper>
        <FeedbackSlider slides={data.allDatoCmsFeedbackFromClient.nodes} />
      </FeedbackWrapper>
    </FeedbackFromWrapper>
  )
}

export default FeedbackFrom
