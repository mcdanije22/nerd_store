import React, { useState } from "react"
import "./styles/eventsPage.scss"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Event from "../components/event/event"
import { useStaticQuery, graphql } from "gatsby"

const EventsPage = () => {
  const [month, setMonth] = useState("November")
  const data = useStaticQuery(graphql`
    query {
      allContentfulEvent(sort: { order: DESC, fields: eventTime }) {
        nodes {
          eventName
          eventTime(formatString: "dddd, MMMM Do YYYY h:mm a ")
          eventMonth
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
  const changeMonth = e => {
    setMonth(e.target.value)
    console.log(month)
  }
  console.log(month)
  return (
    <Layout>
      <SEO title="Events" />
      <div id="eventsPageContainer">
        <h1>Events</h1>
        <div id="eventsMenu">
          <select onChange={changeMonth}>
            <option value={month}>Month</option>
            <option value="November">November</option>
            <option value="December">December</option>
            <option value="January">January</option>
          </select>
          <p>Calendar</p>
        </div>
        <div id="eventsListContainer">
          <h3>{month} 2019</h3>
          <hr />
          {data.allContentfulEvent.nodes
            .filter(event => {
              return event.eventMonth === month
            })
            .map((event, i) => {
              return <Event event={event} key={i} />
            })}
        </div>
      </div>
    </Layout>
  )
}

export default EventsPage
