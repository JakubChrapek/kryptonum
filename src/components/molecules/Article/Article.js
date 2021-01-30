import React from "react"
import { motion } from "framer-motion"

import { StyledArticleStyles } from "../../atoms/BlogSection/StyledArticleStyles"
import { StyledArticleH3 } from "../../atoms/BlogSection/StyledArticleH3"
import { StyledArticleImg } from "../../atoms/BlogSection/StyledArticleImg"
import { StyledArticleP } from "../../atoms/BlogSection/StyledArticleP"
import { StyledArticleGridDiv } from "../../atoms/BlogSection/StyledArticleGridDiv"

const Article = ({ article }) => {
  const year = article.dateOfPublication.split("-")[0].slice(2)
  const month = article.dateOfPublication.split("-")[1]
  return (
    <StyledArticleStyles key={article.id} to={`/blog/${article.articleSlug}`}>
      <StyledArticleGridDiv
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{ marginLeft: 0 }}
      >
        <StyledArticleImg fluid={article.articleFeaturedImage.fluid} />
        <StyledArticleH3
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.2, duration: 0.6 },
          }}
          exit={{ opacity: 0 }}
        >
          {article.articleTitle}
        </StyledArticleH3>
        <StyledArticleP
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.4, duration: 0.6 },
          }}
          exit={{ opacity: 0 }}
        >{`${month}/${year}`}</StyledArticleP>
      </StyledArticleGridDiv>
    </StyledArticleStyles>
  )
}

export default Article
