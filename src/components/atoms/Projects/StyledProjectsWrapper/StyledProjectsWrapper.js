import React, { createRef, useEffect, useMemo, useRef, useState } from "react"
import styled from "styled-components"
import { AnimatePresence, motion } from "framer-motion"
import { TextStyles } from "../../Text/Text"
import { Link } from "gatsby"
import { StructuredText } from "react-datocms"
import StyledVerticalLine from "../StyledVerticalLine/StyledVerticalLine"
import {
  CURSOR_COLORS,
  CURSOR_SIZES,
  CURSOR_TYPES,
  useCursorDispatchContext,
} from "../../../../contexts/cursorContext"
import { GatsbyImage } from "gatsby-plugin-image"
import useMousePosition from "../../../../utils/useMousePosition"

export const ProjectsStyles = styled(motion.section)`
  display: flex;
  padding: 200px 140px 140px;
  width: 100%;
  flex-wrap: wrap;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  min-height: max(720px, 100vh);
  position: sticky;
  top: 0;
  @media (max-width: 1101px) {
    flex-wrap: nowrap;
    flex-direction: column;
    justify-content: flex-start;
    min-height: unset;
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
    transition: color 0.15s cubic-bezier(0.6, -0.05, 0.01, 0.99);
  }

  li {
    position: relative;
    @media (max-width: 1101px) {
      width: 100%;
    }
    a {
      position: relative;
      height: 100%;
      display: inline-flex;
      p {
        transition: color 0.15s cubic-bezier(0.6, -0.05, 0.01, 0.99);
      }
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
      /* justify-content: flex-end; */
    }

    &:nth-of-type(1),
    &:nth-of-type(2) {
      margin-top: 0;
    }

    @media (max-width: 1101px) {
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
      z-index: 5;
      span,
      a {
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

  @media (max-width: 1101px) {
    padding: 120px 70px 120px 160px;
    flex-direction: column;
    align-items: flex-start;

    span {
      top: unset;
      bottom: 10px;
      left: -48px;
    }
  }
  @media (max-width: 778px) {
    padding: 120px 70px 30px 100px;
    span {
      font-size: 10px;
      bottom: 4px;
      left: -36px;
    }
  }
  @media (max-width: 600px) {
    padding: 120px 60px 30px 90px;
  }
  @media (max-width: 500px) {
    padding: 120px 50px 20px 80px;
  }
  @media (max-width: 350px) {
    padding: 120px 40px 20px 70px;
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
  @media (max-width: 1101px) {
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
  const { x, y } = useMousePosition()

  return (
    <ProjectsStyles lessProjects={projects.length < projectsPerPage - 1}>
      {projects.map((project, iterator) => (
        <ProjectItem project={project} projectNumber={iterator} x={x} y={y} />
      ))}
    </ProjectsStyles>
  )
}

const ProjectItem = ({ project, projectNumber, x, y }) => {
  const [hoverState, setHoverState] = useState(false)
  const projectRef = useRef()
  const [projectPosition, setProjectPosition] = useState({
    top: 0,
    left: 0,
  })
  const dispatchCursor = useCursorDispatchContext()

  const maxLettersOfProjectName = 8

  const handleLinkEnter = () => {
    setHoverState(true)
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
    setHoverState(false)
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

  useEffect(() => {
    setProjectPosition({
      top: projectRef.current.getBoundingClientRect().top,
      left: projectRef.current.getBoundingClientRect().left,
    })
  }, [hoverState])

  return (
    <motion.li
      ref={projectRef}
      key={project.id}
      className={hoverState ? "active" : null}
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
        <span>{`(${projectNumber + 1})`}</span>
        <ProjectsTextStyles
          fontSize="86px"
          lineHeight="1.24em"
          letterSpacing="-2.2px"
          color={hoverState ? "var(--accent)" : "var(--light-accent)"}
          fontFamily="LibreBaskerville"
          textTransform="uppercase"
        >
          {project.projectTitle.length <= maxLettersOfProjectName
            ? project.projectTitle
            : project.projectTitle.split(" ")[0].length <=
              maxLettersOfProjectName
            ? project.projectTitle.split(" ")[0]
            : project.projectTitle
                .split(" ")[0]
                .substring(0, maxLettersOfProjectName)}
        </ProjectsTextStyles>
      </Link>
      <AnimatePresence>
        {hoverState && (
          <ProjectFeaturedImageCard
            projectCTA={project.projectCtaText}
            projectSlug={project.projectSlug}
            projectImage={project.projectFeaturedImage}
            x={x - projectPosition.left - 180}
            y={y - projectPosition.top - 120}
          />
        )}
      </AnimatePresence>
    </motion.li>
  )
}

const ImageWrapper = styled(motion.div)`
  position: absolute;
  z-index: 3;
  width: 34.4rem;
  height: 49rem;
  overflow: hidden;
  pointer-events: none;
  .gatsby-image-wrapper,
  img,
  picture {
    width: 100%;
    height: 100%;
  }
  > div {
    position: relative;
  }
  @media (max-width: 767px) {
    width: 17rem;
    height: 25rem;
  }
`

const CircleStyles = styled(motion.div)`
  width: 14rem;
  height: 14rem;
  border-radius: 50%;
  background-color: var(--accent);
  position: absolute;
  left: 10.2rem;
  top: 17.5rem;
  z-index: 2;
  transform: translateX(-50%);
  pointer-events: none;
  @media (max-width: 767px) {
    width: 10rem;
    height: 10rem;
    left: 3.8rem;
    top: 12.5rem;
  }
`

const LinkStyles = styled(Link)`
  text-decoration: none;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ProjectFeaturedImageCard = ({
  projectCTA,
  projectSlug,
  projectImage,
  x,
  y,
}) => {
  return (
    <ImageWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, x: x, y: y }}
      exit={{ opacity: 0 }}
      transition={{ ease: "circOut", duration: 1 }}
    >
      <div>
        <CircleStyles
          key={`${projectSlug}-link`}
          initial={{ opacity: 0, scale: 0.7, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.2 }}
          exit={{ opacity: 0 }}
        >
          <LinkStyles to={`/projects/${projectSlug}`}>
            <TextStyles
              fontSize="12px"
              fontWeight="600"
              color="var(--black)"
              lineHeight="1.5"
              letterSpacing="2px"
              fontFamily="Poppins"
              textAlign="center"
            >
              <StructuredText data={projectCTA} />
            </TextStyles>
          </LinkStyles>
        </CircleStyles>
        <GatsbyImage image={projectImage.gatsbyImageData} />
      </div>
    </ImageWrapper>
  )
}

export default StyledProjectsWrapper
