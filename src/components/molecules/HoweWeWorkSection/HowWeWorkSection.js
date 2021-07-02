import { useStaticQuery, graphql } from "gatsby"
import React, { useRef, useState, useEffect } from "react"

import { StructuredText } from "react-datocms"
import { StyledFeaturedWrapper } from "../../molecules/FeaturedSection/FeaturedWrapper/StyledFeaturedWrapper"
import { Cards } from "./StyledCards"
import { StyledHowWeWorkSection } from "../../atoms/HowWeWorkSection/HowWeWorkSectionStyles"
import { ServicesStyles } from "../../atoms/Services/ServicesStyles/ServicesStyles"
import { TextStyles } from "../../atoms/Text/Text"
import { element } from "prop-types"
import { motion, useMotionValue } from "framer-motion"
import { BgColourWrapper } from "../../atoms/Wrapper/Wrapper"
import {
  CURSOR_COLORS,
  CURSOR_SIZES,
  CURSOR_TYPES,
  useCursorDispatchContext,
} from "../../../contexts/cursorContext"
import { DragSliderWrapper } from "../../atoms/DragSliderWrapper/DragSliderWrapper"

const HowWeWorkSection = ({
  howItWorksTitle,
  howItWorksBigTitle,
  howItWorksFirstCardTitle,
  howItWorksFirstCardParagraph,
  howItWorksSecondCardTitle,
  howItWorksSecondCardParagraph,
  howItWorksThirdCardTitle,
  howItWorksThirdCardParagraph,
  howItWorksFourthCardTitle,
  howItWorksFourthCardParagraph,
}) => {
  const x = useMotionValue(0)
  const [sliderWidth, setSliderWidth] = useState(0)
  const [sliderChildrenWidth, setSliderChildrenWidth] = useState(0)
  const [sliderConstraint, setSliderConstraint] = useState(0)
  const sliderRef = useRef(null)
  const dispatchCursor = useCursorDispatchContext()

  const getElementsWidth = () => {
    let sum = 0
    const gapBetweenEachItem =
      sliderRef.current &&
      getComputedStyle(sliderRef.current).gridColumnGap.replace("px", "")
    const numberOfItems =
      sliderRef.current && sliderRef.current.childNodes.length
    sliderRef &&
      sliderRef.current &&
      sliderRef.current.childNodes &&
      sliderRef.current.childNodes.length > 0 &&
      sliderRef.current.childNodes.forEach((element, i) => {
        sum += element.clientWidth
        if (i < numberOfItems - 1) {
          sum += parseInt(gapBetweenEachItem)
        }
      })
    setSliderChildrenWidth(sum)
  }

  const calculateSliderWidth = () => {
    setSliderWidth(sliderRef?.current?.clientWidth)
  }

  const calculateSliderConstraint = () => {
    setSliderConstraint(sliderChildrenWidth - sliderWidth)
  }

  useEffect(() => {
    let timeoutId = null

    getElementsWidth()
    calculateSliderWidth()
    calculateSliderConstraint()

    const resizeListener = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        getElementsWidth()
        calculateSliderWidth()
        calculateSliderConstraint()
        if (x.current < sliderConstraint) {
          x.set(0)
        }
      }, 100)
    }

    window.addEventListener("resize", resizeListener)

    return () => {
      window.removeEventListener("resize", resizeListener)
    }
  }, [sliderChildrenWidth, sliderRef, sliderWidth])

  return (
    <BgColourWrapper
      onMouseOver={() => {
        dispatchCursor({
          type: "CHANGE_CURSOR_TYPE",
          cursorType: CURSOR_TYPES.FULL_CURSOR,
        })

        dispatchCursor({
          type: "CHANGE_CURSOR_SIZE",
          cursorSize: CURSOR_SIZES.SMALLER,
        })
      }}
      bg="var(--white)"
    >
      <ServicesStyles howWeWorkSection={true}>
        <TextStyles
          fontSize="13px"
          lineHeight="1.33em"
          letterSpacing="2.57px"
          declaredMargin="0 0 26px 0"
          textTransform="uppercase"
          fontWeight="400"
          howWeWorkSection={true}
        >
          {howItWorksTitle}
        </TextStyles>
        <div>
          <StyledFeaturedWrapper
            mainHeader
            howWeWorkHeader
            firstSpanLength="70%"
            secondSpanLength="116%"
          >
            <StructuredText data={howItWorksBigTitle.value} />
          </StyledFeaturedWrapper>
        </div>
        <DragSliderWrapper
          drag={sliderConstraint > 0 ? "x" : null}
          dragConstraints={
            sliderConstraint > 0
              ? {
                  left: -sliderConstraint,
                  right: 0,
                }
              : null
          }
          style={{ x, width: "100%" }}
          initial={{ x: 0 }}
          dragElastic={0.005}
          dragTransition={{
            bounceStiffness: 400,
            bounceDamping: 50,
            timeConstant: 400,
          }}
        >
          <Cards ref={sliderRef}>
            <li key={howItWorksFirstCardTitle}>
              <TextStyles
                fontSize="28px"
                lineHeight="1.5em"
                letterSpacing="normal"
                fontWeight="normal"
                fontFamily="Poppins"
                color="#090909"
              >
                {howItWorksFirstCardTitle}
              </TextStyles>
              <StructuredText data={howItWorksFirstCardParagraph.value} />
              {/* <p>{howItWorksFirstCardParagraph}</p> */}
            </li>
            <li key={howItWorksSecondCardTitle}>
              <TextStyles
                fontSize="28px"
                lineHeight="1.5em"
                letterSpacing="normal"
                fontWeight="normal"
                fontFamily="Poppins"
                color="#090909"
              >
                {howItWorksSecondCardTitle}
              </TextStyles>
              <StructuredText data={howItWorksSecondCardParagraph.value} />
              {/* <p>{howItWorksFirstCardParagraph}</p> */}
            </li>
            <li key={howItWorksThirdCardTitle}>
              <TextStyles
                fontSize="28px"
                lineHeight="1.5em"
                letterSpacing="normal"
                fontWeight="normal"
                fontFamily="Poppins"
                color="#090909"
              >
                {howItWorksThirdCardTitle}
              </TextStyles>
              <StructuredText data={howItWorksThirdCardParagraph.value} />
              {/* <p>{howItWorksThirdCardParagraph}</p> */}
            </li>
            <li key={howItWorksFourthCardTitle}>
              <TextStyles
                fontSize="28px"
                lineHeight="1.5em"
                letterSpacing="normal"
                fontWeight="normal"
                fontFamily="Poppins"
                color="#090909"
              >
                {howItWorksFourthCardTitle}
              </TextStyles>
              <StructuredText data={howItWorksFourthCardParagraph.value} />
              {/* <p>{howItWorksFirstCardParagraph}</p> */}
            </li>
          </Cards>
        </DragSliderWrapper>
      </ServicesStyles>
    </BgColourWrapper>
  )
}

export default HowWeWorkSection
