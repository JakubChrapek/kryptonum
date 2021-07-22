import React, { useState } from "react"
import Img from "gatsby-image"
import { AnimatePresence, motion } from "framer-motion"
import Pagination from "../../molecules/Pagination/Pagination"
import styled from "styled-components"
import useWindowSize from "../../../utils/getWindowSize"
import TeamSlide from "./TeamSlide"

const SlidesStyles = styled(motion.section)`
  margin-top: 110px;
  display: flex;
  justify-content: flex-start;
  width: 100%;
  @media only screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    margin-top: 96px;
  }
`

const TeamSlider = ({ members }) => {
  const [currentPage, setCurrentPage] = useState(0)
  const pageLength = 1
  return (
    <AnimatePresence exitBeforeEnter>
      <SlidesStyles key="Slides-section">
        {members
          .slice(currentPage * pageLength, (currentPage + 1) * pageLength)
          .map(member => (
            <TeamSlide key={member.id} slide={member} />
          ))}
      </SlidesStyles>
      {members.length > pageLength && (
        <Pagination
          key="Slides-pagination"
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          length={Math.ceil(members?.length / pageLength)}
          variant="teamSlider"
        />
      )}
    </AnimatePresence>
  )
}

export default TeamSlider
