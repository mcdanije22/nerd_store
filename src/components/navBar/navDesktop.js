import React from "react"
import "./navDesktop.scss"
import { Link } from "gatsby"

const NavDesktop = () => (
  <div id="navDesktopContainer">
    <Link to="/" id="mainLogo" title="home page">
      The Nerd Store
    </Link>
    <ul id="navDesktop">
      <li>
        <Link to="/" activeClassName="activeNav" title="home page">
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/announcements"
          activeClassName="activeNav"
          title="announcements"
        >
          Announcements
        </Link>
      </li>
      <li>
        <Link to="/gallery" activeClassName="activeNav" title="gallery">
          Gallery
        </Link>
      </li>
      <li>
        <Link to="/events" activeClassName="activeNav" title="events">
          Events
        </Link>
      </li>
      <li>
        <Link to="/contact" activeClassName="activeNav" title="contact">
          Contact
        </Link>
      </li>
    </ul>
  </div>
)
export default NavDesktop
