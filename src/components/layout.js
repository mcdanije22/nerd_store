// import React from "react"
// import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

// import Header from "./header"
// import "./layout.css"

// const Layout = ({ children }) => {
//   const data = useStaticQuery(graphql`
//     query SiteTitleQuery {
//       site {
//         siteMetadata {
//           title
//         }
//       }
//     }
//   `)

//   return (
//     <>
//       <Header siteTitle={data.site.siteMetadata.title} />
//       <div
//         style={{
//           margin: `0 auto`,
//           maxWidth: 960,
//           padding: `0px 1.0875rem 1.45rem`,
//           paddingTop: 0,
//         }}
//       >
//         <main>{children}</main>
//         <footer>
//           © {new Date().getFullYear()}, Built with
//           {` `}
//           <a href="https://www.gatsbyjs.org">Gatsby</a>
//         </footer>
//       </div>
//     </>
//   )
// }

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

// export default Layout

import React from "react"
import "./layout.scss"

import Footer from "./footer/footer"
import NavMobile from "./navBar/navmobile"
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
    <>
      <NavMobile />
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
          <h5>Upcoming Events</h5>
          <EventCard event={data.allContentfulEvent.nodes[0]} />
          <EventCard event={data.allContentfulEvent.nodes[1]} />
          <Link to="/events">
            <h5 style={{ textAlign: "right", color: "#5091e8" }}>
              See More...
            </h5>
          </Link>
          <Tweets />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Layout
