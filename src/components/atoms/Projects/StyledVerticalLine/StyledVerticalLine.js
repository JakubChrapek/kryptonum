import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import React, { useEffect } from "react"
import styled from "styled-components"
import useWindowHeight from "../../../../utils/getWindowHeight"
import useWindowSize from "../../../../utils/getWindowSize"

const LineStyles = styled(motion.span)`
  width: 5px;
  height: 350px;
  background-color: var(--accent);
  position: absolute;
  left: 0;
  top: 0;
`

const StyledVerticalLine = React.forwardRef(
  ({ activeProject, numberOfProjects }, ref) => {
    // const height = useWindowHeight()
    const width = useWindowSize()
    const y = useSpring(0, { stiffness: 500, damping: 50 })
    const x = useSpring(0, { stiffness: 500, damping: 50 })
    const isRight = activeProject % 2
    const numberOfProjectsInRow = width < 1100 ? 1 : 2
    const numberOfRows = numberOfProjects / numberOfProjectsInRow

    useEffect(() => {
      y.set(
        width < 1100
          ? 110 +
              (Math.floor(activeProject / numberOfProjectsInRow) *
                (ref.current.clientHeight - 260)) /
                numberOfRows
          : (Math.floor(activeProject / numberOfProjectsInRow) *
              ref.current.clientHeight) /
              numberOfRows
      )
    }, [activeProject])

    useEffect(() => {
      console.log(ref)
    }, [])

    return (
      <>
        {ref && ref.current && (
          <LineStyles
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: 1 }}
            style={{
              y,
              x,
              height: ref.current.clientHeight / numberOfRows,
            }}
          />
        )}
      </>
    )
  }
)

export default StyledVerticalLine
