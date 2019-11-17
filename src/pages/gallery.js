import React from "react"
import "./styles/galleryPage.scss"

import SEO from "../components/seo"
import Layout from "../components/layout"

const GalleryPage = () => (
  <Layout>
    <SEO title="Gallery" />
    <div>
      <h1>Gallery</h1>
      <div id="galleryContainer">
        <img src="https://via.placeholder.com/150" />
        <img src="https://via.placeholder.com/150" />
        <img src="https://via.placeholder.com/150" />
        <img src="https://via.placeholder.com/150" />
        <img src="https://via.placeholder.com/150" />
        <img src="https://via.placeholder.com/150" />
        <img src="https://via.placeholder.com/150" />
        <img src="https://via.placeholder.com/150" />
      </div>
      <hr />
    </div>
  </Layout>
)

export default GalleryPage