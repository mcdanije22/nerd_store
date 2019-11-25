import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import SEO from "../components/seo"

export const query = graphql`
  query($slug: String!) {
    contentfulEvent(slug: { eq: $slug }) {
      eventName
      eventTime(formatString: "MMMM DD")
      id
      price
      prize
      description {
        json
      }
    }
  }
`

const EventPost = props => {
  console.log(props.data.contentfulEvent)
  return (
    <Layout>
      <SEO title={props.data.contentfulEvent.eventName} />
    </Layout>
  )
}
export default EventPost
