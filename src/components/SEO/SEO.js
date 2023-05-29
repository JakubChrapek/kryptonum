import React from "react"
import { HelmetDatoCms } from "gatsby-source-datocms"
import { seoTypes } from "../../types/propTypes"

const SEO = ({
  meta,
  url,
  type = "website",
  locale = "pl_PL",
  title = "Kryptonum - tworzymy strony internetowe nie z tej ziemi!",
  desc = "W Kryptonum polecimy na księżyc i z powrotem, żeby znaleźć najlepszy projekt strony internetowej. A jak starczy czasu, to przyniesiemy Ci w gratisie kamień księżycowy.",
  image = "https://www.datocms-assets.com/39614/1628090781-kryptonum.png?w=1200&fit=max&fm=jpg",
}) => {
  return (
    <HelmetDatoCms seo={meta}>
      <meta
        name="facebook-domain-verification"
        content="j96o3vd6mygkwp7iyhla62mog8b4u5"
      />
      <link rel="canonical" href={url} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta property="og:image" content={image} />
      <meta property="fb:app_id" content="514552329657477" />
      <meta property="og:locale" content={locale} />
    </HelmetDatoCms>
  )
}

SEO.propTypes = seoTypes

export default SEO
