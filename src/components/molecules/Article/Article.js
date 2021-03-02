import React from "react"

import { StyledArticleStyles } from "../../atoms/BlogSection/StyledArticleStyles"
import { StyledArticleImg } from "../BlogSection/StyledArticleImg"
import { StyledArticleGridDiv } from "../../atoms/BlogSection/StyledArticleGridDiv"

import { TextStyles } from "../../atoms/Text/Text"

const Article = ({ article, full }) => {
  const year = article.dateOfPublication.split("-")[0].slice(2)
  const month = article.dateOfPublication.split("-")[1]
  return (
    <StyledArticleStyles
      full={full}
      key={article.id}
      to={`/blog/${article.articleSlug}`}
    >
      <StyledArticleGridDiv
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{ marginLeft: 0 }}
      >
        <StyledArticleImg fluid={article.articleFeaturedImage.fluid} />
        <TextStyles
          declaredPadding="11px 0 0 0"
          declaredBorderTop="2px solid var(--black)"
          declaredMargin="15px 0 0 0"
          declaredWidth="100%"
          lineHeight="1.38em"
          fontSize="16px"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.2, duration: 0.6 },
          }}
          exit={{ opacity: 0 }}
        >
          {article.articleTitle}
        </TextStyles>
        <TextStyles
          fontSize="10px"
          lineHeight="1.3em"
          letterSpaccing="0.8px"
          declaredMargin={full ? "9px 0 0" : "26px 0 0 0"}
          declaredPadding="0 0 13px 0"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.4, duration: 0.6 },
          }}
          exit={{ opacity: 0 }}
        >{`${month}/${year}`}</TextStyles>
      </StyledArticleGridDiv>
    </StyledArticleStyles>
  )
}

export default Article
