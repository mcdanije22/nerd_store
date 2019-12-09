import React from "react"
import "./styles/galleryPage.scss"
import { useStaticQuery, graphql } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Img from "gatsby-image"

const GalleryPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulGalleryPhoto(sort: { order: DESC, fields: updatedAt }) {
        nodes {
          title
          url
          image {
            fluid(maxWidth: 250) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  `)
  const galleryPhotos = data.allContentfulGalleryPhoto.nodes
  console.log(galleryPhotos)
  return (
    <Layout>
      <SEO title="Gallery" />
      <div id="galleryPage">
        <h1>Gallery</h1>
        <div id="galleryContainer">
          <ul id="photosList">
            {galleryPhotos.map((photo, i) => {
              return (
                <li key={i}>
                  <a href={photo.url} target="_blank">
                    <Img fluid={photo.image.fluid} alt={photo.title} />
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default GalleryPage
