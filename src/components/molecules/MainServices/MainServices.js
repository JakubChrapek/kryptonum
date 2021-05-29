import React from "react"

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
          fontFamily="JetBrains Mono"
          fontSize="14px"
          lineHeight="1.25"
          color="var(--black)"
          textAlign="center"
          letterSpacing="2.29px"
          textTransform="uppercase"
          declaredpadding="0 0 20px 0"
          fontWeight="bold"
        >
          {servicesTitle}
        </ServicesStylesH2>
        <ServicesWrapper>
          {servicesListFirstRow.map(service => (
            <li>
              <h3>{service.usluga}</h3>
            </li>
          ))}
        </ServicesWrapper>
        <ServicesWrapper>
          {servicesListSecondRow.map((service, iterator) => (
            <li>
              <h3
                className={
                  iterator === servicesListSecondRow.length - 1 && "underline"
                }
              >
                {service.usluga}
              </h3>
            </li>
          ))}
        </ServicesWrapper>
      </ServicesStyles>
    </BgColourWrapper>
  )
}

export default MainServices
