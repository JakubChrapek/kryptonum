import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { TextStyles } from "../../Text/Text"
import { Link } from "gatsby"
import StyledVerticalLine from "../StyledVerticalLine/StyledVerticalLine"
import {
  CURSOR_COLORS,
  CURSOR_SIZES,
  CURSOR_TYPES,
  useCursorDispatchContext,
} from "../../../../contexts/cursorContext"

export const ProjectsStyles = styled(motion.section)`
  display: flex;
  padding: 200px 140px 140px;
  width: 100%;
  flex-wrap: wrap;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  height: 100vh;
  position: sticky;
  top: 0;

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
      position: relative;
      height: 100%;
      display: inline-flex;
    }
    --gap-width: 80px;
    @media (max-width: 1920px) {
      --gap-width: 50px;
    }
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
      justify-content: flex-end;
    }

    &:nth-of-type(1),
    &:nth-of-type(2) {
      margin-top: 0;
    }

    @media (max-width: 1100px) {
      --gap-width: 0px;
      flex-basis: unset;
      margin-top: 32px;
      &:nth-of-type(2) {
        margin-top: 32px;
      }
      &:nth-of-type(even) {
        justify-content: flex-start;
      }
    }

    &.active {
      z-index: 2;
      span {
        color: var(--accent);
      }
    }
  }

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
    padding: 180px 120px 120px;
  }
  @media (max-width: 1366px) {
    padding: 160px 100px 100px;
  }
  @media (max-width: 1190px) {
    padding: 140px 70px 80px 86px;
  }

  @media (max-width: 1100px) {
    padding: 120px 70px 120px 160px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: ${({ lessProjects }) =>
      lessProjects ? "flex-start" : "center"};

    span {
      top: unset;
      bottom: 10px;
      left: -48px;
    }
  }
  @media (max-width: 778px) {
    padding: 80px 70px 30px 100px;
    span {
      font-size: 10px;
      bottom: 4px;
      left: -36px;
    }
  }
  @media (max-width: 600px) {
    padding: 80px 60px 30px 90px;
  }
  @media (max-width: 500px) {
    padding: 80px 50px 20px 80px;
  }
  @media (max-width: 350px) {
    padding: 80px 40px 20px 70px;
  }
`

const ProjectsTextStyles = styled(TextStyles)`
  @media (max-width: 2600px) {
    font-size: 120px;
  }
  @media (max-width: 2208px) {
    font-size: 100px;
  }
  @media (max-width: 1920px) {
    font-size: 92px;
  }
  @media (max-width: 1460px) {
    font-size: 80px;
  }
  @media (max-width: 1366px) {
    font-size: 72px;
  }
  @media (max-width: 1190px) {
    font-size: 68px;
  }
  @media (max-width: 1100px) {
    font-size: 90px;
  }
  @media (max-width: 778px) {
    font-size: 70px;
  }
  @media (max-width: 600px) {
    font-size: 48px;
  }
  @media (max-width: 500px) {
    font-size: 40px;
  }
  @media (max-width: 350px) {
    font-size: 34px;
  }
`

const StyledProjectsWrapper = ({
  projects,
  projectsPerPage,
  activeProjectId,
  setActiveProjectId,
}) => {
  const handleClick = iterator => {
    setActiveProjectId(iterator)
  }
  const dispatchCursor = useCursorDispatchContext()

  const handleLinkEnter = () => {
    dispatchCursor({
      type: "CHANGE_CURSOR_TYPE",
      cursorType: CURSOR_TYPES.FULL_CURSOR,
    })
    dispatchCursor({
      type: "CHANGE_CURSOR_COLOR",
      cursorColor: CURSOR_COLORS.ACCENT_TRANSPARENT,
    })
    dispatchCursor({
      type: "CHANGE_CURSOR_SIZE",
      cursorSize: CURSOR_SIZES.BIGGER,
    })
  }
  const handleNormalLeave = () => {
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
  }

  return (
    <ProjectsStyles lessProjects={projects.length < projectsPerPage - 1}>
      {projects.map((project, iterator) => (
        <motion.li
          key={project.projectTitle}
          onClick={() => handleClick(project.id)}
          className={project.id === activeProjectId ? "active" : null}
          whileTap={{
            scale: 0.95,
            transition: { duration: 0.3 },
          }}
        >
          <Link
            onMouseEnter={handleLinkEnter}
            onMouseLeave={handleNormalLeave}
            to={project.projectSlug}
          >
            <span>{`(${iterator + 1})`}</span>
            <ProjectsTextStyles
              fontSize="86px"
              lineHeight="1.24em"
              letterSpacing="-2.2px"
              color={
                project.id === activeProjectId
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
