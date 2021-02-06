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

  @media (min-width: 1800px) {
    max-width: 1520px;
  }

  @media (min-width: 1910px) {
    max-width: 1630px;
  }

  @media (min-width: 2200px) {
    max-width: 1920px;
  }

  @media (max-width: 1440px) {
    max-width: 100%;
    padding: 0 120px;
  }
  @media (max-width: 1366px) {
    padding: 0 100px;
  }
  @media (max-width: 1190px) {
    padding: 0 70px 0 86px;
  }

  @media (max-width: 1100px) {
    padding: 140px 70px 120px 86px;
  }

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
    a {
      width: 100%;
      height: 100%;
    }
    --gap-width: 80px;
    @media (max-width: 1366px) {
      --gap-width: 60px;
    }
    @media (max-width: 1190px) {
      --gap-width: 50px;
    }
    flex-basis: calc(50% - var(--gap-width));
    list-style-type: none;
    margin-top: var(--gap-width);
    display: flex;

    &:nth-of-type(odd) {
      margin-right: var(--gap-width);
    }

    &:nth-of-type(even) {
      margin-left: var(--gap-width);
      a {
        text-align: right;
      }
    }

    &:nth-of-type(1),
    &:nth-of-type(2) {
      margin-top: 0;
    }

    @media (max-width: 1100px) {
      --gap-width: 0px;
      flex-basis: 100%;
      margin-top: 32px;
      &:nth-of-type(2) {
        margin-top: 32px;
      }
      &:nth-of-type(even) {
        a {
          text-align: left;
        }
      }
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
  @media (max-width: 1366px) {
    font-size: 72px;
  }
  @media (max-width: 1190px) {
    font-size: 68px;
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
    </ProjectsStyles>
  )
}

export default StyledProjectsWrapper
