import React from "react"
import SEO from "../components/SEO/SEO"

//Atoms

//Molecules
import HeroContent from "../components/molecules/HeroContent/HeroContent"
import { StyledFeaturedWrapper } from "../components/molecules/FeaturedSection/FeaturedWrapper/StyledFeaturedWrapper"
import BlogCategorizedArticlesGrid from "../components/organisms/Blog/BlogCategorizedArticlesGrid"

const BlogLinks = () => (
  <StyledFeaturedWrapper
    mainHeader
    firstSpanLength="145%"
    secondSpanLength="190%"
  >
    <span>Blog</span>
    <span>Posts</span>
  </StyledFeaturedWrapper>
)

const Blog = () => {
  return (
    <>
      <SEO title="Blog" />
      <HeroContent content={<BlogLinks />} />
      <BlogCategorizedArticlesGrid />
    </>
  )
}

export default Blog
