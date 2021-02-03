import React, { useState } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { TextStyles } from "../../Text/Text"
import { Link, useStaticQuery } from "gatsby"

export const ProjectsStyles = styled(motion.section)`
  display: flex;
  padding: 139px 140px 97px;
  width: 100%;
  flex-wrap: wrap;

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
  }

  li {
    --gap-width: 80px;
    flex-basis: calc(50% - var(--gap-width));
    position: relative;
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

    &.active {
      transform: translate3d(4px, -2px, -2px);
      span {
        color: var(--accent);
      }
    }

    &:hover {
      p {
        color: var(--accent);
      }
      span {
        color: var(--accent);
      }
    }
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

  return (
    <ProjectsStyles>
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
            <TextStyles
              fontSize="88px"
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
            </TextStyles>
          </Link>
        </motion.li>
      ))}
    </ProjectsStyles>
  )
}

export default StyledProjectsWrapper
