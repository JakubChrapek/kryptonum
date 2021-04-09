import { AnimateSharedLayout, motion } from "framer-motion"
import { useStaticQuery, graphql } from "gatsby"
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
  padding: 142px 139px;
  margin: 0 auto;
  @media only screen and (max-width: 1121px) {
    padding: 104px 28px 50px 28px;
  }
  @media only screen and (max-width: 600px) {
    padding-bottom: 0;
  }
`

const FeedbackWrapper = styled.section`
  display: grid;
  height: 576px;
  max-height: 80vh;
  background-color: var(--white);
  grid-template-areas:
    "title content content content content"
    "title content content content content"
    "title content content content content"
    "title content content content content"
    "pagination pagination pagination pagination pagination";
  grid-gap: 20px 100px;
  max-width: 1366px;
  margin: 0 auto;
  @media (max-width: 1024px) {
    grid-gap: 12px 40px;
  }
`

const TitleWrapper = styled(motion.div)`
  display: flex;
  grid-area: title;
`

const FeedbackFrom = () => {
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
              fontFamily="JetBrains Mono"
            >
              Feedback from
              <br />
              Our Clients
            </TextStyles>
          </TitleWrapper>
          <FeedbackSlider slides={data.allDatoCmsFeedbackFromClient.nodes} />
        </FeedbackWrapper>
      </AnimateSharedLayout>
    </FeedbackFromWrapper>
  )
}

export default FeedbackFrom
