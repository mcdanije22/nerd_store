import React from "react"
import "./styles/contactPage.scss"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  fab,
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import MapCard from "../components/mapCard/mapCard"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <div id="contactContainer">
      <h1>Contact Us!</h1>
      <ul id="socailGroup">
        <li>
          <a href="/">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </li>
        <li>
          <a href="/">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
        <li>
          <a href="/">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
      </ul>
      <div id="shopInfo">
        <p>We are located at:</p>
        <p>50 Main st Mount</p>
        <p style={{ marginTop: "-1.5rem" }}>Morris, Ny 14510</p>
        <p>555-555-5555</p>
        <p>Mon-Fri 8am-6pm</p>
        <p style={{ marginTop: "-1.5rem" }}>Sat-Sun 8am -7pm</p>
      </div>
      <div id="bottomSection">
        <h3>Got Any Questions?</h3>
        <p>Feel free to message us</p>
        <div id="contactForm">
          <p>Name *</p>
          <input />
          <p>Message *</p>
          <input />
          <button>Submit</button>
        </div>
      </div>
      <MapCard />
    </div>
  </Layout>
)
export default ContactPage
