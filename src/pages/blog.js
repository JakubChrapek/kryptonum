import React from "react"
import SEO from "../components/SEO/SEO"

//Atoms

//Molecules
import HeroContent from "../components/molecules/HeroContent/HeroContent"
import { StyledFeaturedWrapper } from "../components/molecules/FeaturedSection/FeaturedWrapper/StyledFeaturedWrapper"
import BlogCategorizedArticlesGrid from "../components/organisms/Blog/BlogCategorizedArticlesGrid"
import styled from "styled-components"

const BlogLinks = () => (
  <StyledFeaturedWrapper
    mainHeader
    firstSpanLength="145%"
    secondSpanLength="190%"
    hasSmalFontSize
  >
    <span>Blog</span>
    <span>Posts</span>
  </StyledFeaturedWrapper>
)

const Blog = () => {
  return (
    <>
      <SEO title="Blog" />
      <HeroContent variant="blog" content={<BlogLinks />} />
      <BlogCategorizedArticlesGrid />
    </>
  )
}

export default Blog
