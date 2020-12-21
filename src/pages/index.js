import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO/SEO"
import website from "../../config/website"

const IndexPage = () => (
  <>
    <SEO title="Kryptonum" />
    <h1 id={website.skipNavId}>Hi people</h1>
  </>
)

export default IndexPage
