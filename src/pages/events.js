import React from "react"
import "./styles/eventsPage.scss"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Event from "../components/event/event"
import { useStaticQuery, graphql } from "gatsby"

const EventsPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulEvent(sort: { order: DESC, fields: eventTime }) {
        nodes {
          eventName
          eventTime(formatString: "dddd, MMMM Do YYYY, h:mm:ss a ")
          id
          price
          prize
          slug
          tagLine
          description {
            json
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Events" />
      <div id="eventsPageContainer">
        <h1>Events</h1>
        <div id="eventsMenu">
          <select>
            <option value="0">Month</option>
            <option value="January">January</option>
            <option value="Febuary">Febuary</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </select>
          <p>Calendar</p>
        </div>
        <div id="eventsListContainer">
          <h3>November 2019</h3>
          <hr />
          {data.allContentfulEvent.nodes.map((event, i) => {
            return <Event event={event} key={i} />
          })}
          {/* <Event />
          <Event />
          <Event />
          <Event /> */}
        </div>
      </div>
    </Layout>
  )
}
export default EventsPage
