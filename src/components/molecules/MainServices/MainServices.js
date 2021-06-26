import React, { useEffect } from "react"
import gsap from "gsap"
import Marquee from "react-fast-marquee"
import { StructuredText } from "react-datocms"
import { ServicesWrapper } from "../../atoms/Services/ServicesWrapper/ServicesWrapper"
import { ServicesStyles } from "../../atoms/Services/ServicesStyles/ServicesStyles"
import { ServicesStylesH2 } from "../../atoms/Services/ServicesStyles/ServicesStylesH2"
import { BgColourWrapper } from "../../atoms/Wrapper/Wrapper"
import {
  useCursorDispatchContext,
  CURSOR_TYPES,
  CURSOR_COLORS,
  CURSOR_SIZES,
} from "../../../contexts/cursorContext"

const MainServices = ({
  servicesListFirstRow,
  servicesListSecondRow,
  servicesTitle,
}) => {
  const dispatchCursor = useCursorDispatchContext()

  return (
    <BgColourWrapper
      onMouseOver={() => {
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
      bg="var(--white)"
    >
      <ServicesStyles id="whatwereupto">
        <ServicesStylesH2
          fontSize="14px"
          lineHeight="1.25"
          color="var(--black)"
          textAlign="center"
          textTransform="uppercase"
          declaredpadding="0 0 46px 0"
          fontWeight="500"
        >
          {servicesTitle}
        </ServicesStylesH2>
        <Marquee gradient={false} speed="50">
          <ServicesWrapper>
            {servicesListFirstRow.map(service => (
              <li key={service.usluga} className="box">
                <h3>{service.usluga}</h3>
              </li>
            ))}
          </ServicesWrapper>
        </Marquee>
        <Marquee gradient={false} speed="50" direction="right">
          <ServicesWrapper>
            {servicesListSecondRow.map((service, iterator) => (
              <li key={service.usluga} className="box">
                <h3>{service.usluga}</h3>
              </li>
            ))}
          </ServicesWrapper>
        </Marquee>
      </ServicesStyles>
    </BgColourWrapper>
  )
}

export default MainServices
