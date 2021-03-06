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
        <Link to="/" title="home page">
          <li>
            <p>Home</p>
          </li>
        </Link>
        <Link to="/announcements" title="announcements">
          <li>
            <p>Announcements</p>
          </li>
        </Link>
        <Link to="/gallery" title="gallery">
          <li>
            <p>Gallery</p>
          </li>
        </Link>
        <Link to="/events" title="events">
          <li>
            <p>Events</p>
          </li>
        </Link>
        <Link to="/contact" title="contact">
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
        <a href="" target="_blank" title="facebook page">
          <li style={{ marginLeft: "0", color: "#597BB7" }}>
            <FontAwesomeIcon icon={faFacebook} />
          </li>
        </a>
        <a href="" target="_blank" title="twitter page">
          <li style={{ color: "#4C9FEB" }}>
            <FontAwesomeIcon icon={faTwitter} />
          </li>
        </a>
        <a href="" target="_blank" title="instagram page">
          <li>
            <FontAwesomeIcon icon={faInstagram} style={{ color: "#E9B56E" }} />
          </li>
        </a>
        <a
          href="mailto:someone@example.com?Subject=Hello"
          target="_blank"
          title="email us"
        >
          <li>
            <FontAwesomeIcon icon={faEnvelope} style={{ color: "#F4ECE6" }} />
          </li>
        </a>
        <p
          style={{
            fontSize: "1.2rem",
            marginBottom: ".5rem",
            color: "white",
            letterSpacing: ".2rem",
          }}
        >
          <b>Stay up to Date</b>
        </p>
        <hr />
        <form
          name="emailList"
          method="post"
          action="https://formspree.io/meqobdyk"
        >
          <label for="email">
            <input name="email" placeholder="john@gmail.com" type="text" />
          </label>
          <button type="submit">
            <b>Subscribe</b>
          </button>
        </form>
      </ul>
    </div>
    <p id="signature">
      © 2019{" "}
      <a href="http://joshmcdaniel.com/" target="_blank">
        Josh McDaniel
      </a>
    </p>
  </div>
)
export default Footer
