import React from "react"
import { StyledErrorSection } from "../../molecules/404/StyledErrorSection"
import { StyledErrorWrapper } from "../../molecules/404/StyledErrorWrapper"
import {
  CURSOR_COLORS,
  CURSOR_SIZES,
  CURSOR_TYPES,
  useCursorDispatchContext,
} from "../../../contexts/cursorContext"
import { StructuredText } from "react-datocms"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 50%;
  height: 100%;
  justify-content: center;
  padding-right: 60px;
  @media (max-width: 911px) {
    padding-right: 0;
  }
`

const StyledLink = styled(Link)`
  width: fit-content;
  font-family: "JetBrains Mono";
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.22;
  letter-spacing: normal;
  padding: 19px 25px;
  color: var(--black);
  border: 0;
  background-color: var(--button-accent);
  cursor: pointer;
  display: inline-block;

  @media (max-width: 911px) {
    font-size: 18px;
    font-weight: 600;
    line-height: 1.22;
  }
`

const RightColumn = styled(LeftColumn)`
  padding-right: 0;
  .gatsby-image-wrapper-constrained {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 911px) {
    margin-bottom: 25px;
  }
`

const StyledHeader = styled.span`
  font-family: "Poppins";
  font-size: 76px;
  font-weight: normal;
  line-height: 1.51;
  letter-spacing: normal;
  color: var(--black);
  margin-bottom: 6px;
  @media (max-width: 911px) {
    font-size: 40px;
    line-height: 2.48;
    margin-bottom: 8px;
  }

  }
`

const StyledMessage = styled.p`
  font-family: "Poppins";
  font-size: 28px;
  font-weight: normal;
  line-height: 1.71;
  color: var(--black-font);
  margin-bottom: 43px;
  @media (max-width: 911px) {
    font-size: 16px;
    line-height: 1.38;
    margin-bottom: 36px;
    > p {
      display: inline;
      &:last-of-type {
        margin-left: 5px;
      }
    }
  }
  @media (max-width: 390px) {
    font-size: 15px;
  }
`

const StyledInfo = styled.p`
  font-family: 'JetBrains Mono';
  font-size: 18px;
  display: inline-block;
  font-weight: normal;
  line-height: 1.67;
  letter-spacing: normal;
  color: var(--black);
  padding: 16px 21px;
  background-color: var(--light-gray);
  width: fit-content;
  margin-bottom: 56px;
  @media (max-width: 911px) {
    font-size: 18px;
    line-height: 1.67;
    margin-bottom: 22px;
  }
  @media (max-width: 390px) {
    font-size: 13px;
  }
}
`

const ErrorMain = ({
  errorTitle,
  errorMessage,
  errorButtonText,
  errorImage,
}) => {
  const dispatchCursor = useCursorDispatchContext()
  return (
    <StyledErrorSection>
      <StyledErrorWrapper
        onPointerEnter={() => {
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
        <LeftColumn>
          <StyledHeader>404</StyledHeader>
          <StyledMessage>
            <StructuredText data={errorTitle} />
          </StyledMessage>
          <StyledInfo>
            <StructuredText data={errorMessage} />
          </StyledInfo>
          <StyledLink
            to="/"
            onPointerEnter={() => {
              dispatchCursor({
                type: "CHANGE_CURSOR_TYPE",
                cursorType: CURSOR_TYPES.FULL_CURSOR,
              })
              dispatchCursor({
                type: "CHANGE_CURSOR_COLOR",
                cursorColor: CURSOR_COLORS.DARK_TRANSPARENT,
              })
              dispatchCursor({
                type: "CHANGE_CURSOR_SIZE",
                cursorSize: CURSOR_SIZES.BIGGER,
              })
            }}
            onPointerLeave={() => {
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
            <StructuredText data={errorButtonText} />
          </StyledLink>
        </LeftColumn>
        <RightColumn>
          <GatsbyImage image={errorImage.gatsbyImageData} />
        </RightColumn>
      </StyledErrorWrapper>
    </StyledErrorSection>
  )
}

export default ErrorMain
