import { motion } from "framer-motion"
import { useStaticQuery, graphql } from "gatsby"
import { StructuredText } from "react-datocms"
import React from "react"
import styled, { css } from "styled-components"
import {
  CURSOR_SIZES,
  CURSOR_TYPES,
  useCursorDispatchContext,
} from "../../../contexts/cursorContext"
import { TextStyles } from "../../atoms/Text/Text"
import FeedbackSlider from "./FeedbackSlider"

const FeedbackFromWrapper = styled.div`
  width: 100%;
  background-color: ${({ bg }) => bg};
  padding: 113px 112px 141px 112px;
  position: relative;
  margin: 0 auto;

  @media (max-width: 1242px) {
    padding: 113px 60px 141px 60px;
  }

  @media (max-width: 1140px) {
    padding: 84px 40px 103px 40px;
  }
  @media (max-width: 600px) {
    padding: 84px 28px 84px 28px;
  }
  ${({ variant }) =>
    variant === "offer" &&
    css`
      padding: clamp(130px, 16.38vw, 236px) clamp(36px, 7.77vw, 112px)
        clamp(143px, 14.93vw, 215px);
      @media (max-width: 1242px) {
        padding: clamp(130px, 16.38vw, 236px) clamp(36px, 7.77vw, 112px)
          clamp(143px, 14.93vw, 215px);
      }

      @media (max-width: 1024px) {
        padding: clamp(52px, 19.53vw, 150px) clamp(26px, 4.6875vw, 36px)
          clamp(51px, 18.61vw, 143px);
      }

      @media (max-width: 640px) {
        padding: 52px 16px 50px;
      }
    `}
`

const FeedbackWrapper = styled.section`
  display: grid;
  height: 100%;
  background-color: ${({ bg }) => bg};
  grid-template-columns: 280px 1fr;
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
  max-width: 1366px;
  margin: 0 auto;
`

const TitleWrapper = styled(motion.div)`
  display: flex;
  @media (max-width: 767px) {
    grid-column: 1/3;
  }
`

const FeedbackFrom = ({ feedbackTytul, variant }) => {
  const dispatchCursor = useCursorDispatchContext()
  const data = useStaticQuery(graphql`
    query FeedbackQuery {
      allDatoCmsFeedbackFromClient {
        nodes {
          id
          clientName
          linkToClientPage
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
      bg={variant === "offer" ? "var(--light-gray)" : "var(--white)"}
      variant={variant}
      onMouseEnter={() => {
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
