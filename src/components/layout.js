import React from "react"
import "./layout.scss"

import Footer from "./footer/footer"
import NavMobile from "./navBar/navmobile"
import NavDesktop from "./navBar/navDesktop"
import Img from "gatsby-image"
import { useStaticQuery, graphql, Link } from "gatsby"
import Tweets from "./tweets/tweets"
import EventCard from "../components/event/eventCard"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulEvent(sort: { order: DESC, fields: eventTime }) {
        nodes {
          eventName
          eventTime(formatString: "MMMM DD")
          id
          price
          prize
          slug
          eventImage {
            file {
              url
            }
          }
        }
      }
      allContentfulAsset(filter: { title: { eq: "Landing Page Image" } }) {
        nodes {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  `)
  return (
    <div style={{ fontFamily: "Roboto, sans-serif" }}>
      <NavMobile />
      <NavDesktop />
      <Img
        fluid={data.allContentfulAsset.nodes[0].fluid}
        style={{
          width: "100%",
          height: "40vh",
          marginBottom: "2rem",
          filter: "grayscale(100%)",
        }}
      />
      <div id="container">
        <div id="leftGroup">
          <main id="mainContainer">{children}</main>
        </div>
        <div id="rightGroup">
          <div id="eventCards">
            <h5>Upcoming Events</h5>
            <EventCard event={data.allContentfulEvent.nodes[0]} />
            <EventCard event={data.allContentfulEvent.nodes[1]} />
            <Link to="/events">
              <h5 style={{ textAlign: "right", color: "#5091e8", margin: "0" }}>
                See More...
              </h5>
            </Link>
          </div>
          <div id="subscribe">
            <p>
              <b>Stay up to Date</b>
            </p>
            <form
              name="emailList"
              method="post"
              data-netlify="true"
              netlify-honeypot="bot-field"
            >
              <input name="email" placeholder="john@gmail.com" type="text" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
          <Tweets />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
