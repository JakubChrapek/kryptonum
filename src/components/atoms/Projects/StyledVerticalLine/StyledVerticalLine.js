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
    const numberOfProjectsInRow = 2
    const numberOfRows = numberOfProjects / numberOfProjectsInRow

    useEffect(() => {
      y.set(
        (Math.floor(activeProject / numberOfProjectsInRow) *
          ref.current.clientHeight) /
          numberOfRows
      )
      x.set(isRight ? ref.current.clientWidth : 30)
      console.log(ref)
    }, [activeProject])

    return (
      <>
        {ref && (
          <LineStyles
            initial={{ opacity: 0 }}
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
