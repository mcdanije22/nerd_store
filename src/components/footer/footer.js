import React from "react"
import "./footer.scss"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import {
  fab,
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"

const Footer = () => (
  <div id="footerContainer">
    <ul id="socialGroup">
      <Link to="">
        <li>
          <FontAwesomeIcon icon={faFacebook} />
        </li>
      </Link>
      <Link to="">
        <li>
          <FontAwesomeIcon icon={faTwitter} />
        </li>
      </Link>

      <Link to="">
        <li>
          <FontAwesomeIcon icon={faInstagram} />
        </li>
      </Link>
    </ul>
    <div id="footerGroups">
      <ul className="footerInfoGroup">
        <li>
          <p
            style={{
              fontSize: "1.8rem",
              marginBottom: ".5rem",
              color: "white",
              letterSpacing: ".2rem",
            }}
          >
            <b>Navigation</b>
          </p>
        </li>
        <Link to="/">
          <li>
            <p>Home</p>
          </li>
        </Link>
        <Link to="">
          <li>
            <p>Announcements</p>
          </li>
        </Link>
        <Link to="/gallery">
          <li>
            <p>Gallery</p>
          </li>
        </Link>
        <Link to="/events">
          <li>
            <p>Events</p>
          </li>
        </Link>
        <Link to="/contact">
          <li>
            <p>Contact</p>
          </li>
        </Link>
      </ul>
      <ul className="footerInfoGroup">
        <li>
          <p
            style={{
              fontSize: "1.8rem",
              marginBottom: ".5rem",
              color: "white",
              letterSpacing: ".2rem",
            }}
          >
            <b>Hours</b>
          </p>
        </li>
        <li>
          <p>Monday-Friday: 8am-8pm</p>
        </li>
        <li>
          <p>Saturday & Sunday: 10am-11pm</p>
        </li>
      </ul>
      <ul className="footerInfoGroup">
        <li>
          <p
            style={{
              fontSize: "1.8rem",
              marginBottom: ".5rem",
              color: "white",
              letterSpacing: ".2rem",
            }}
          >
            <b>Address</b>
          </p>
        </li>
        <li>
          <p>50 Main St.</p>
        </li>
        <li>
          <p>Mount Morris, NY 14510</p>
        </li>
        <li>
          <p>555-555-5555</p>
        </li>
      </ul>
    </div>
    <p
      style={{
        textAlign: "center",
        fontSize: ".8rem",
        margin: "0",
        marginTop: "1rem",
      }}
    >
      Josh McDaniel ©2019
    </p>
  </div>
)
export default Footer
