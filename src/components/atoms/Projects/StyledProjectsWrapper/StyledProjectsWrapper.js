import React, { useEffect, useLayoutEffect, useRef, useState } from "react"
import styled from "styled-components"
import { AnimatePresence, motion } from "framer-motion"
import { TextStyles } from "../../Text/Text"
import { Link } from "gatsby"
import {
  CURSOR_SIZES,
  CURSOR_TYPES,
  useCursorDispatchContext,
} from "../../../../contexts/cursorContext"
import { GatsbyImage } from "gatsby-plugin-image"
import useMousePosition from "../../../../utils/useMousePosition"
import useWindowSize from "../../../../utils/getWindowSize"
import useWindowHeight from "../../../../utils/getWindowHeight"

export const ProjectsStyles = styled(motion.section)`
  display: flex;
  padding: 169px 112px;
  width: 100%;
  flex-wrap: wrap;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  position: sticky;
  top: 0;
  @media (max-width: 1101px) {
    flex-wrap: nowrap;
    flex-direction: column;
    justify-content: flex-start;
    min-height: unset;
  }

  span {
    font-size: 16px;
    font-weight: normal;
    line-height: 1;
    letter-spacing: 1.5px;
    color: var(--light-accent);
    position: relative;
    top: 40px;
    margin-right: 16px;
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
      width: 100%;
      /* width: 100%; */
      &:focus-visible {
        outline-offset: 18px;
        outline: 4px solid var(--accent);
        > span,
        p {
          color: var(--accent);
        }
      }
      p {
        transition: color 0.15s cubic-bezier(0.6, -0.05, 0.01, 0.99);
      }
    }
    --gap-width: 40px;
    @media (max-width: 1366px) {
      --gap-width: 36px;
    }
    @media (max-width: 1190px) {
      --gap-width: 40px;
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
        justify-content: flex-end;
        @media (max-width: 1101px) {
          justify-content: flex-start;
        }
      }
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
  }
  @media (max-width: 902px) {
    padding: 110px 60px 110px 120px;
  }
  @media (max-width: 778px) {
    padding: 120px 60px 30px 90px;
    span {
      font-size: 11px;
      top: 20px;
    }
  }
  @media (max-width: 627px) {
    padding: 120px 60px 30px 90px;
  }
  @media (max-width: 500px) {
    padding: 120px 50px 20px 80px;
  }
  @media (max-width: 486px) {
    padding: 120px 20px 20px 20px;
  }
`

const ProjectsTextStyles = styled(TextStyles)`
  font-size: clamp(51px, ${56 / 1920 * 100}vw, 62px);
  @media (max-width: 1400px) {
  font-size: clamp(40px, ${51 / 1400 * 100}vw, 51px);
  }

  @media (max-width: 1101px) {
    font-size: 56px;
  }
  @media (max-width: 778px) {
    font-size: 46px;
  }
  @media (max-width: 640px) {
    font-size: 38px;
  }
  @media (max-width: 550px) {
    font-size: 33px;
  }
  @media (max-width: 486px) {
    font-size: clamp(24px, 8vw, 30px);
  }
`

const StyledProjectsWrapper = ({ projects }) => {
  const { x, y } = useMousePosition()
  const projectListRef = useRef()
  let width = useWindowSize()
  let height = useWindowHeight()
  const [listPosition, setListPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setListPosition({
      x: projectListRef.current.getBoundingClientRect().x,
      y: projectListRef.current.getBoundingClientRect().y,
    })
  }, [width, height])

  return (
    <ProjectsStyles ref={projectListRef}>
      {projects.map((project, iterator) => (
        <ProjectItem
          listPosition={listPosition}
          project={project}
          projectNumber={iterator}
          x={x}
          y={y}
        />
      ))}
    </ProjectsStyles>
  )
}

const ProjectItem = ({ listPosition, project, projectNumber, x, y }) => {
  const [hoverState, setHoverState] = useState(false)
  const projectRef = useRef()
  const projectCardRef = useRef()
  let width = useWindowSize()
  let height = useWindowHeight()
  const [projectPosition, setProjectPosition] = useState({
    top: 0,
    left: 0,
    width: 0,
    height: 0,
  })
  const [projectCardDimensions, setProjectCardDimensions] = useState({
    width: 0,
    height: 0,
  })
  const dispatchCursor = useCursorDispatchContext()

  const maxLettersOfProjectName = 25

  const handleLinkEnter = () => {
    setHoverState(true)
    dispatchCursor({
      type: "CHANGE_CURSOR_TYPE",
      cursorType: CURSOR_TYPES.FULL_CURSOR,
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
      type: "CHANGE_CURSOR_SIZE",
      cursorSize: CURSOR_SIZES.SMALLER,
    })
  }

  useEffect(() => {
    setProjectPosition({
      top: projectRef.current.getBoundingClientRect().top,
      left: projectRef.current.getBoundingClientRect().left,
      width: projectRef.current.getBoundingClientRect().width,
      height: projectRef.current.getBoundingClientRect().height,
    })
  }, [hoverState])

  useLayoutEffect(() => {
    if (projectCardRef.current) {
      setProjectCardDimensions({
        width: projectCardRef.current.offsetWidth,
        height: projectCardRef.current.offsetHeight,
      })
    }
  }, [])

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
          fontSize="76px"
          lineHeight="1.5"
          color={hoverState ? "var(--accent)" : "var(--light-accent)"}
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
        {width > 1024 && hoverState && (
          <ProjectFeaturedImageCard
            projectNumber={projectNumber}
            ref={projectCardRef}
            projectCTA={project.projectCtaText}
            projectSlug={project.projectSlug}
            projectImage={project.projectPreviewImage}
            x={
              width <= 1101
                ? projectPosition.width / 2 + (x - width / 2) / 10
                : width < 1540
                  ? x < width / 2
                    ? projectPosition.width -
                    projectPosition.left +
                    (x - width / 2) / 10
                    : -projectPosition.width / 2 + (x - width / 2) / 10
                  : x < width / 2
                    ? projectPosition.width / 2 +
                    projectPosition.left +
                    (x - width / 2) / 10
                    : -projectPosition.width / 2 + (x - width / 2) / 10
            }
            y={0 - projectPosition.top / 2 + (y - height / 2) / 10}
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
  projectNumber,
  x,
  y,
}) => {
  return (
    <ImageWrapper
      style={{ originX: "50%", originY: "100%" }}
      even={projectNumber % 2 === 0}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, x: x, y: y }}
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
      transition={{ ease: "circOut", duration: 0.7 }}
    >
      <div>
        <GatsbyImage image={projectImage.gatsbyImageData} />
      </div>
    </ImageWrapper>
  )
}

export default StyledProjectsWrapper
