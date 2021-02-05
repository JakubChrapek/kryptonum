import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { TextStyles } from "../../Text/Text"
import { Link } from "gatsby"
import StyledVerticalLine from "../StyledVerticalLine/StyledVerticalLine"

export const ProjectsStyles = styled(motion.section)`
  display: flex;
  padding: 0 140px;
  width: 100%;
  flex-wrap: wrap;
  max-width: 1440px;
  margin: 0 auto;
  position: relative;

  span {
    font-size: 14px;
    font-weight: normal;
    line-height: 2.14;
    letter-spacing: 5px;
    position: absolute;
    color: var(--light-accent);
    left: -16px;
    top: -20px;
    font-family: "JetBrains Mono";
  }

  a {
    text-decoration: none;
    position: relative;
  }

  li {
    --gap-width: 80px;
    flex-basis: calc(50% - var(--gap-width));
    list-style-type: none;
    margin-top: var(--gap-width);
    display: flex;

    &:nth-of-type(odd) {
      margin-right: var(--gap-width);
    }

    &:nth-of-type(even) {
      margin-left: var(--gap-width);
      justify-content: flex-end;
    }

    &:nth-of-type(1),
    &:nth-of-type(2) {
      margin-top: 0;
    }

    &.active {
      z-index: 2;
      span {
        color: var(--accent);
      }
    }
  }
`

const ProjectsTextStyles = styled(TextStyles)`
  @media (max-width: 1440px) {
    font-size: 80px;
  }
`

const StyledProjectsWrapper = ({
  projects,
  activeProject,
  setActiveProject,
}) => {
  const handleClick = iterator => {
    setActiveProject(iterator)
  }

  const containerRef = useRef()

  return (
    <ProjectsStyles ref={containerRef}>
      {projects.map((project, iterator) => (
        <motion.li
          key={project.projectTitle}
          onClick={() => handleClick(iterator)}
          onMouseOver={() => setActiveProject(iterator)}
          className={iterator === activeProject ? "active" : null}
          whileTap={{
            scale: 0.95,
            transition: { duration: 0.3 },
          }}
        >
          <Link to={project.projectSlug}>
            <span>{`(${iterator + 1})`}</span>
            <ProjectsTextStyles
              fontSize="86px"
              lineHeight="1.24em"
              letterSpacing="-2.2px"
              color={
                iterator === activeProject
                  ? "var(--accent)"
                  : "var(--light-accent)"
              }
              fontFamily="LibreBaskerville"
              textTransform="uppercase"
            >
              {project.projectTitle}
            </ProjectsTextStyles>
          </Link>
        </motion.li>
      ))}
      <StyledVerticalLine
        activeProject={activeProject}
        numberOfProjects={projects.length}
        ref={containerRef}
      />
    </ProjectsStyles>
  )
}

export default StyledProjectsWrapper
