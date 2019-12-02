import React from "react"
import Layout from "../components/layout"
import "./event_post.scss"
import { graphql, Link } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import SEO from "../components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import Img from "gatsby-image"

export const query = graphql`
  query($slug: String!) {
    contentfulEvent(slug: { eq: $slug }) {
      eventName
      eventTime(formatString: "MMMM DD h:mm a ")
      price
      prize
      description {
        json
      }
      eventImage {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`

const EventPost = props => {
  console.log(props.data.contentfulEvent)
  const { eventName, eventTime, price, prize } = props.data.contentfulEvent
  return (
    <Layout>
      <SEO title={props.data.contentfulEvent.eventName} />
      <div className="eventTemplate">
        <div className="topHeading ">
          <Link to="/events">
            <div className="backButton">
              <FontAwesomeIcon icon={faChevronLeft} /> <h5>Events </h5>
            </div>
          </Link>
          <div className="titleInfo">
            <h3>{eventName}</h3>
            <p>{eventTime.slice(0, -9)}</p>
          </div>
        </div>
        <Img
          fluid={props.data.contentfulEvent.eventImage.fluid}
          style={{ marginBottom: "2rem" }}
        />
        {/* <img
          className="mainImage"
          src={`${props.data.contentfulEvent.eventImage.fluid.src}`}
        /> */}
        <div className="mainInfo">
          <p>
            <b style={{ color: "black" }}>Price:</b> {price}
          </p>
          <p>
            <b style={{ color: "black" }}>Time:</b> {eventTime}
          </p>
          <p>
            <b style={{ color: "black" }}>Prizes:</b> {prize}
          </p>
          <p style={{ margin: "0" }}>
            <b style={{ color: "black" }}>Description:</b>
          </p>
          {documentToReactComponents(
            props.data.contentfulEvent.description.json
          )}
          <h3>Want To Reserve Your Spot?</h3>
          <p>Send us your confirmation</p>
          <div id="contactForm">
            <p>Name *</p>
            <input />
            <p>Event *</p>
            <input />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default EventPost
