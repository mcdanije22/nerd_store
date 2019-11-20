import React from "react"
import "./styles/eventsPage.scss"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Event from "../components/event/event"

const EventsPage = () => (
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
        <Event />
        <Event />
        <Event />
        <Event />
      </div>
    </div>
  </Layout>
)
export default EventsPage
