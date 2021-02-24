import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import React, { useEffect } from "react"
import styled from "styled-components"
import useWindowHeight from "../../../../utils/getWindowHeight"
import useWindowSize from "../../../../utils/getWindowSize"

const LineStyles = styled(motion.span)`
  width: 5px;
  height: 350px;
  background-color: var(--accent);
  position: fixed;
  left: 0;
  top: 0;
`

const StyledVerticalLine = React.forwardRef(
  (
    { activeProject, numberOfProjects, activeSection, numberOfSections },
    ref
  ) => {
    const windowHeight = useWindowHeight()
    const width = useWindowSize()
    const y = useSpring(0, { stiffness: 750, damping: 20, duration: 800 })

    useEffect(() => {
      y.set((activeSection * windowHeight) / numberOfSections)
    }, [activeSection])

    return (
      <>
        {ref && ref.current && (
          <LineStyles
            initial={{ opacity: 0, scaleY: 0, originY: 0 }}
            animate={{ opacity: 1, scaleY: 1, originY: 0 }}
            style={{
              x: 0,
              y,
              height: windowHeight / numberOfSections,
            }}
          />
        )}
      </>
    )
  }
)

export default StyledVerticalLine
