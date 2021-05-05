import { AnimatePresence, motion } from "framer-motion"
import React, { useState } from "react"
import styled from "styled-components"
import useWindowSize from "../../../utils/getWindowSize"
import Pagination from "../Pagination/Pagination"
import FeedbackSlide from "./FeedbackSlide"

const SlidesStyles = styled(motion.section)`
  margin-top: 12px;
  display: flex;
  justify-content: flex-start;
  width: 100%;
  grid-area: content;
  @media (max-width: 767px) {
    margin-top: 0;
  }
`
const FeedbackSlider = ({ slides }) => {
  const width = useWindowSize()
  const [currentPage, setCurrentPage] = useState(0)
  const pageLength = 1
  return (
    <AnimatePresence exitBeforeEnter>
      <SlidesStyles layout key="Slides-section">
        {slides
          .slice(currentPage * pageLength, (currentPage + 1) * pageLength)
          .map(slide => (
            <FeedbackSlide key={slide.id} slide={slide} />
          ))}
      </SlidesStyles>
      {slides.length > pageLength && (
        <Pagination
          key="Slides-pagination"
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          length={Math.ceil(slides?.length / pageLength)}
          gridArea="pagination"
          layout="position"
        />
      )}
    </AnimatePresence>
  )
}

export default FeedbackSlider
