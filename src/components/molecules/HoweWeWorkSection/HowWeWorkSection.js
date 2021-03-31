import { useStaticQuery, graphql } from "gatsby"
import React, { useRef, useState, useEffect } from "react"

import { StyledFeaturedWrapper } from "../../molecules/FeaturedSection/FeaturedWrapper/StyledFeaturedWrapper"
import { Cards } from "./StyledCards"
import { StyledHowWeWorkSection } from "../../atoms/HowWeWorkSection/HowWeWorkSectionStyles"
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

const query = graphql`
  query {
    datoCmsPageHome {
      cards {
        cardTitle
        cardDescription
        id
      }
    }
  }
`

const HowWeWorkSection = () => {
  const { datoCmsPageHome } = useStaticQuery(query)
  const x = useMotionValue(0)
  const [sliderWidth, setSliderWidth] = useState(0)
  const [sliderChildrenWidth, setSliderChildrenWidth] = useState(0)
  const [sliderConstraint, setSliderConstraint] = useState(0)
  const sliderRef = useRef(null)
  const dispatchCursor = useCursorDispatchContext()

  const elementsWidth = () => {
    let sum = 0

    sliderRef.current.childNodes.forEach(
      element => (sum += element.clientWidth)
    )
    setSliderChildrenWidth(sum)
  }

  const clacSliderWidth = () => {
    setSliderWidth(sliderRef?.current?.clientWidth)
  }

  const sliderConstarint = () => {
    setSliderConstraint(sliderChildrenWidth - sliderWidth)
  }

  useEffect(() => {
    let timeoutId = null

    elementsWidth()
    clacSliderWidth()
    sliderConstarint()

    const resizeListener = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        elementsWidth()
        clacSliderWidth()
        sliderConstarint()
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
          cursorType: CURSOR_TYPES.OUTLINED_CURSOR,
        })
        dispatchCursor({
          type: "CHANGE_CURSOR_COLOR",
          cursorColor: CURSOR_COLORS.DARK,
        })
        dispatchCursor({
          type: "CHANGE_CURSOR_SIZE",
          cursorSize: CURSOR_SIZES.DEFAULT,
        })
      }}
      bg="var(--white)"
    >
      <StyledHowWeWorkSection howWeWorkSection={true}>
        <TextStyles
          fontSize="8px"
          lineHeight="1.5em"
          letterSpacing="1.33px"
          fontFamily="Poppins"
          textTransform="uppercase"
          fontWeight="bold"
          howWeWorkSection={true}
        >
          How we work
        </TextStyles>
        <div>
          <StyledFeaturedWrapper firstSpanLength="100%" secondSpanLength="72%">
            <span>Our design</span>
            <span>process</span>
          </StyledFeaturedWrapper>
        </div>
        <motion.div style={{ width: "100%" }}>
          <Cards
            drag={"x"}
            dragConstraints={{
              left: -sliderConstarint,
              right: 0,
            }}
            style={{ x }}
            initial={{ x: 30 }}
            dragElastic={0.05}
            ref={sliderRef}
          >
            {datoCmsPageHome.cards.map(card => (
              <li key={card.cardTitle}>
                <TextStyles
                  fontSize="28px"
                  lineHeight="1.5em"
                  letterSpacing="normall"
                  fontFamily="Poppins"
                  color="#090909"
                >
                  {card.cardTitle}
                </TextStyles>
                <p>{card.cardDescription}</p>
              </li>
            ))}
          </Cards>
        </motion.div>
      </StyledHowWeWorkSection>
    </BgColourWrapper>
  )
}

export default HowWeWorkSection
