// import React, { useEffect, useRef, useState } from "react"
// import StyledProjectsWrapper from "../components/atoms/Projects/StyledProjectsWrapper/StyledProjectsWrapper"
// import StyledCaseStudyCard from "../components/atoms/Projects/StyledCaseStudyCard/StyledCaseStudyCard"
// import styled from "styled-components"
// import { graphql } from "gatsby"
// import StyledVerticalLine from "../components/atoms/Projects/StyledVerticalLine/StyledVerticalLine"
// import useWindowSize from "../utils/getWindowSize"
// import { gsap } from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"
// import { ScrollToPlugin } from "gsap/ScrollToPlugin"
// import { TweenLite } from "gsap/gsap-core"
// import {
//   CURSOR_COLORS,
//   CURSOR_SIZES,
//   CURSOR_TYPES,
//   useCursorDispatchContext,
// } from "../contexts/cursorContext"

// const ProjectsStyles = styled.div`
//   /* position: fixed; */
//   min-height: 100vh;
//   width: 100%;
//   overflow: hidden;
//   background-color: rgb(247, 247, 247);
//   display: flex;
//   flex-direction: column;
//   position: relative;
// `

// const Projects = ({ data }) => {
//   const dispatchCursor = useCursorDispatchContext()
//   const handleWrapperEnter = () => {
//     dispatchCursor({
//       type: "CHANGE_CURSOR_TYPE",
//       cursorType: CURSOR_TYPES.FULL_CURSOR,
//     })
//     dispatchCursor({
//       type: "CHANGE_CURSOR_COLOR",
//       cursorColor: CURSOR_COLORS.DARK,
//     })
//     dispatchCursor({
//       type: "CHANGE_CURSOR_SIZE",
//       cursorSize: CURSOR_SIZES.SMALLER,
//     })
//   }

//   const containerRef = useRef()
//   const numberOfProjects = data.allDatoCmsProject.nodes.length
//   const projectsPerPage = 6
//   const width = useWindowSize()

//   return (
//     <ProjectsStyles onMouseEnter={handleWrapperEnter} ref={containerRef}>
//       <StyledProjectsWrapper
//         projects={data.allDatoCmsProject.nodes.slice(0, projectsPerPage)}
//         // projectsPerPage={projectsPerPage}
//         // activeProjectId={activeProjectId}
//         // setActiveProjectId={setActiveProjectId}
//       />
//       {/* <StyledProjectsWrapper
//         projects={data.allDatoCmsProject.nodes.slice(
//           projectsPerPage,
//           2 * projectsPerPage
//         )}
//         projectsPerPage={projectsPerPage}
//         activeProjectId={activeProjectId}
//         setActiveProjectId={setActiveProjectId}
//       /> */}
//       {/* {width > 1100 && (
//         <StyledCaseStudyCard
//           projects={data.allDatoCmsProject.nodes}
//           activeProjectId={activeProjectId}
//         />
//       )} */}
//       {/* <StyledVerticalLine
//         activeProject={activeProjectId}
//         activeSection={activeSection}
//         numberOfSections={numberOfSections}
//         numberOfProjects={numberOfProjects}
//         ref={containerRef}
//       /> */}
//     </ProjectsStyles>
//   )
// }

// export default Projects

import React, { useState, useRef, useEffect } from "react"
import { graphql, Link } from "gatsby"
// Framer motion
import { motion, AnimatePresence } from "framer-motion"
//Gatby Image
import { GatsbyImage } from "gatsby-plugin-image"

import useMousePosition from "../utils/useMousePosition"

// Transition Animation
const transition = { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.9] }
// Stagger on menu link
const parent = {
  animate: { transition: { staggerChildren: 0.1, delayChildren: 1 } },
}
// Menu Title Slide Up
const titleSlideUp = {
  initial: { y: 200 },
  animate: { y: 0 },
}
// Menu lines grow
const lineGrow = {
  initial: { width: "100%" },
  animate: { width: 0 },
}

const Projects = ({ data }) => {
  const { x, y } = useMousePosition()
  const {
    allDatoCmsProject: { nodes },
  } = data
  return (
    <>
      <AnimatePresence>
        <>
          <motion.div
            initial={{ visibility: "hidden" }}
            exit={{
              visibility: "hidden",
              transition: { delay: 1 },
            }}
            animate={{
              visibility: "visible",
              transition: { delay: 1 },
            }}
            className="projects"
          >
            <div className="menu-title">Products</div>
            {/* <div
              // onClick={() => closeMenu()}
              // onMouseEnter={() => setCursorHovered(true)}
              // onMouseLeave={() => setCursorHovered(false)}
              className="close"
            >
              <Close />
            </div> */}
            <div className="menu">
              <div className="container">
                <div className="menu-inner">
                  <motion.ul
                    variants={parent}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    {nodes.map(project => (
                      <Project
                        key={project.id}
                        leftLineFlex={1}
                        rightLineFlex={2}
                        title={project.title}
                        thumbnailPosition={project.thumbnailPosition}
                        offset={project.offset}
                        imageData={project.projectFeaturedImage.gatsbyImageData}
                        x={x}
                        y={y}
                      />
                    ))}
                  </motion.ul>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      </AnimatePresence>
    </>
  )
}

const Project = ({
  leftLineFlex,
  rightLineFlex,
  title,
  thumbnailPosition,
  offset,
  imageData,
  id,
  x,
  y,
}) => {
  const project = useRef()
  const [hoverState, setHoverState] = useState(false)
  const [state, setState] = useState({
    top: 0,
    left: 0,
  })
  useEffect(() => {
    setState({
      top: project.current.getBoundingClientRect().top,
      left: project.current.getBoundingClientRect().left,
    })
  }, [hoverState])

  return (
    <motion.li ref={project}>
      <Link to={`/product/${id}`}>
        <div className="wrapper">
          <div className={`line left flex-${leftLineFlex}`}>
            <motion.div
              variants={lineGrow}
              className="mask"
              transition={{ ...transition, duration: 1 }}
            ></motion.div>
          </div>
          <motion.div
            onHoverStart={() => setHoverState(true)}
            onHoverEnd={() => setHoverState(false)}
            // onMouseEnter={() => setCursorHovered(true)}
            // onMouseLeave={() => setCursorHovered(false)}
            className="title"
          >
            <h2>
              <motion.div
                variants={titleSlideUp}
                transition={transition}
                className="text"
              >
                {title}
              </motion.div>
            </h2>
          </motion.div>
          <div className="thumbnail" style={{ left: thumbnailPosition }}>
            <GatsbyImage image={imageData} />
            <motion.div
              variants={lineGrow}
              transition={{ ...transition, duration: 1 }}
              className="mask"
            ></motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            className="floating-image"
            animate={{
              opacity: hoverState ? 1 : 0,
              x: x - state.left + offset,
              y: y - state.top,
            }}
            transition={{
              ease: "linear",
            }}
          >
            <GatsbyImage image={imageData} />
          </motion.div>
          <div className={`line right flex-${rightLineFlex}`}>
            <motion.div
              variants={lineGrow}
              className="mask right"
              transition={{ ...transition, duration: 1 }}
            ></motion.div>
          </div>
        </div>
      </Link>
    </motion.li>
  )
}

export const query = graphql`
  query ProjectsListingQuery {
    allDatoCmsProject {
      nodes {
        id
        projectTitle
        projectSlug
        projectFeaturedImage {
          gatsbyImageData(width: 518, height: 697, placeholder: BLURRED)
        }
      }
    }
  }
`

export default Projects
