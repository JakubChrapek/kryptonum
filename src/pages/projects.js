import React, { useEffect, useRef, useState } from "react"
import StyledProjectsWrapper from "../components/atoms/Projects/StyledProjectsWrapper/StyledProjectsWrapper"
import StyledCaseStudyCard from "../components/atoms/Projects/StyledCaseStudyCard/StyledCaseStudyCard"
import styled from "styled-components"
import { graphql } from "gatsby"
import StyledVerticalLine from "../components/atoms/Projects/StyledVerticalLine/StyledVerticalLine"
import useWindowSize from "../utils/getWindowSize"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { TweenLite } from "gsap/gsap-core"

const ProjectsStyles = styled.div`
  /* position: fixed; */
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
  background-color: rgb(247, 247, 247);
  display: flex;
  flex-direction: column;
  position: relative;
`

const Projects = ({ data }) => {
  const [activeProject, setActiveProject] = useState(0)
  const [activeSection, setActiveSection] = useState(0)
  const containerRef = useRef()
  const numberOfProjects = data.allDatoCmsProject.nodes.length
  const projectsPerPage = 4
  const numberOfSections = Math.ceil(numberOfProjects / projectsPerPage)
  const width = useWindowSize()

  function goToSection(section, reverse) {
    gsap.to(window, {
      scrollTo: { y: section, autoKill: false },
      duration: 1,
    })
    if (reverse) {
      setActiveSection(prev => Math.max(0, prev - 1))
    } else {
      setActiveSection(prev => Math.min(numberOfSections - 1, prev + 1))
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
      gsap.utils.toArray("section").forEach(section => {
        ScrollTrigger.create({
          trigger: section,
          onEnter: () => goToSection(section, false),
        })

        ScrollTrigger.create({
          trigger: section,
          start: "bottom bottom",
          onEnterBack: () => goToSection(section, true),
        })
      })
    }
    setActiveSection(0)

    return () => ScrollTrigger.kill()
  }, [])

  useEffect(() => {
    console.log(
      "ACTIVE SECTION: ",
      activeSection,
      "NUMBER OF SEC: ",
      numberOfSections,
      "HEIGHT: ",
      containerRef.current.clientHeight
    )
  }, [activeSection])

  return (
    <ProjectsStyles ref={containerRef}>
      <StyledProjectsWrapper
        projects={data.allDatoCmsProject.nodes}
        activeProject={activeProject}
        setActiveProject={setActiveProject}
      />
      <StyledProjectsWrapper
        projects={data.allDatoCmsProject.nodes}
        activeProject={activeProject}
        setActiveProject={setActiveProject}
      />
      <StyledCaseStudyCard
        projects={data.allDatoCmsProject.nodes}
        activeProject={data.allDatoCmsProject.nodes[activeProject]}
      />
      <StyledVerticalLine
        activeProject={activeProject}
        activeSection={activeSection}
        numberOfSections={numberOfSections}
        numberOfProjects={numberOfProjects}
        ref={containerRef}
      />
    </ProjectsStyles>
  )
}

export const query = graphql`
  query ProjectsListingQuery {
    allDatoCmsProject {
      nodes {
        projectTitle
        projectSlug
        projectFeaturedImage {
          fluid(maxWidth: 524, maxHeight: 617) {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
  }
`

export default Projects
