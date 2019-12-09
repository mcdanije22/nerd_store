import React from "react"
import "./styles/index.scss"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutSection from "../components/aboutSection/aboutSection"
import Reviews from "../components/reviews/reviews"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <div>
        <div id="indexContainer">
          <AboutSection />
          <Reviews />
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
