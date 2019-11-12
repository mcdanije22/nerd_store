import React from "react"
import "./styles/index.scss"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import EventCard from "../components/event/eventCard"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <img
        src="https://via.placeholder.com/150"
        style={{ width: "100%", height: "12rem" }}
      />
      <div id="indexContainer">
        <div id="introSection">
          <h1>Welcome Back To The Nerd Store</h1>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex
          </p>
        </div>
        <div id="events">
          <EventCard />
          <EventCard />
          <p>See More...</p>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
