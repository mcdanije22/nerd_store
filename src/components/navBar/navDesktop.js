import React from "react"
import "./navDesktop.scss"
import { Link } from "gatsby"

const NavDesktop = () => (
  <div id="navDesktopContainer">
    <Link to="/" id="mainLogo">
      The Nerd Shop
    </Link>
    <ul id="navDesktop">
      <li>
        <Link to="/" activeClassName="activeNav">
          Home
        </Link>
      </li>
      <li>
        <Link to="/announcements" activeClassName="activeNav">
          Announcements
        </Link>
      </li>
      <li>
        <Link to="/gallery" activeClassName="activeNav">
          Gallery
        </Link>
      </li>
      <li>
        <Link to="/events" activeClassName="activeNav">
          Events
        </Link>
      </li>
      <li>
        <Link to="/contact" activeClassName="activeNav">
          Contact
        </Link>
      </li>
    </ul>
  </div>
)
export default NavDesktop
