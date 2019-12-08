import React from "react"
import "./footer.scss"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import {
  fab,
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"

const Footer = () => (
  <div id="footerContainer">
    {/* <ul id="socialGroup">
      <Link to="" target="_blank">
        <li>
          <FontAwesomeIcon icon={faFacebook} />
        </li>
      </Link>
      <Link to="" target="_blank">
        <li>
          <FontAwesomeIcon icon={faTwitter} />
        </li>
      </Link>

      <a href="" target="_blank">
        <li>
          <FontAwesomeIcon icon={faInstagram} />
        </li>
      </a>
      <Link to="">
        <li>
          <FontAwesomeIcon icon={faEnvelope} />
        </li>
      </Link>
    </ul> */}
    <div id="footerGroups">
      <ul className="footerInfoGroup">
        <li>
          <p
            style={{
              fontSize: "1.2rem",
              marginBottom: ".5rem",
              color: "white",
              letterSpacing: ".2rem",
            }}
          >
            <b>Quick Links</b>
          </p>
          <hr />
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
              fontSize: "1.2rem",
              marginBottom: ".5rem",
              color: "white",
              letterSpacing: ".2rem",
            }}
          >
            <b>Hours</b>
          </p>
          <hr />
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
              fontSize: "1.2rem",
              marginBottom: ".5rem",
              color: "white",
              letterSpacing: ".2rem",
            }}
          >
            <b>Address</b>
          </p>
          <hr />
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
      <ul id="socialGroup">
        <p
          style={{
            fontSize: "1.2rem",
            marginBottom: ".5rem",
            color: "white",
            letterSpacing: ".2rem",
          }}
        >
          <b>Social</b>
        </p>
        <hr />
        <Link to="" target="_blank">
          <li style={{ marginLeft: "0", color: "#597BB7" }}>
            <FontAwesomeIcon icon={faFacebook} />
          </li>
        </Link>
        <Link to="" target="_blank">
          <li style={{ color: "#4C9FEB" }}>
            <FontAwesomeIcon icon={faTwitter} />
          </li>
        </Link>
        <a href="" target="_blank">
          <li>
            <FontAwesomeIcon icon={faInstagram} style={{ color: "#E9B56E" }} />
          </li>
        </a>
        <Link to="">
          <li>
            <FontAwesomeIcon icon={faEnvelope} style={{ color: "#F4ECE6" }} />
          </li>
        </Link>
      </ul>
    </div>
  </div>
)
export default Footer
