import React from "react"
import "./styles/eventsPage.scss"
import Layout from "../components/layout"
import SEO from "../components/seo"

const EventsPage = () => (
  <Layout>
    <SEO title="Events" />
    <div id="eventsPageContainer">
      <h1>Events</h1>
      <div id="eventsMenu">
        <input />
        <p>Calendar</p>
      </div>
      <div id="eventsListContainer">
        <h3>November 2019</h3>
        <hr />
        <div className="event">
          <div className="eventDate">
            <p>Tuesday</p>
            <p>26</p>
          </div>
          <div className="eventMain">
            <p>FNM</p>
            <p>Tuesday November 26, 2019 10am</p>
            <p>
              Description Lorem ipsum dolor sit amet, Lorem ipsum dolor sit
              amet, Lorem ipsum dolor sit amet,
            </p>
            <p>Share Event: </p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)
export default EventsPage