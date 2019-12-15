import React, { useState } from "react"
import "./navmobile.scss"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

const NavMobile = () => {
  const [menuIsActive, toggleBool] = useState(false)
  const menuToggle = () => {
    toggleBool(menuIsActive ? false : true)
  }
  return (
    <div id="navContainer">
      <ul id="mobileNav">
        <li>
          <FontAwesomeIcon
            icon={faBars}
            style={{ color: "#707070" }}
            onClick={menuToggle}
          />
        </li>
        <li>
          <Link to="/" title="home page">
            The Nerd Store
          </Link>
        </li>
        <li>{/* for alignment */}</li>
      </ul>
      <div id="menuContainer" style={{ display: menuIsActive ? "" : "none" }}>
        <ul id="dropMenu">
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
    </div>
  )
}

export default NavMobile
