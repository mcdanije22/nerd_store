import React from "react"
import "./styles/index.scss"

import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import EventCard from "../components/event/eventCard"
import { Timeline } from "react-twitter-widgets"
import MapCard from "../components/mapCard/mapCard"

const IndexPage = () => {
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
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <div>
        <img
          src="https://via.placeholder.com/150"
          style={{ width: "100%", height: "80vh" }}
        />
        <div id="indexContainer">
          <div id="introSection">
            <h1>Welcome Back To The Nerd Store</h1>
            <hr />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex Lorem ipsum dolor
              sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex
            </p>
          </div>
          <div id="events">
            <EventCard event={data.allContentfulEvent.nodes[0]} />
            <EventCard event={data.allContentfulEvent.nodes[1]} />
            <Link to="/events">
              <h5>See More...</h5>
            </Link>
          </div>
          <div id="tweets">
            <Timeline
              dataSource={{
                sourceType: "profile",
                screenName: "wizards_magic",
              }}
              options={{
                username: "wizards_magic",
                height: "400",
                tweetLimit: "5",
                chrome: "nofooter noborders",
              }}
              noHeader="true"
              noBorders="true"
              noFooter="true"
            />
          </div>
          <hr style={{ margin: "2rem" }} />
          <div id="locationInfoContainer">
            <div id="locationDescription">
              <p>We are located at:</p>
              <p>50 Main st Mount Morris, Ny 14510.</p>
              <p>Street parking available!</p>
            </div>
            <MapCard />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
