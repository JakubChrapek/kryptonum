import React from "react"
import styled from "styled-components"

const CardStyles = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--white);
  border: 1px solid var(--black);
  width: 344px;
  height: 490px;
`

const StyledCaseStudyCard = ({ activeProject }) => {
  return <CardStyles>{activeProject.projectTitle}</CardStyles>
}

export default StyledCaseStudyCard
