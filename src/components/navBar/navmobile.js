import React, { Component } from "react"
import "./navmobile.scss"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import {
  fab,
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"

class NavMobile extends Component {
  constructor() {
    super()
    this.state = {
      menuIsActive: false,
    }
  }
  menuToggle = () => {
    this.setState({ menuIsActive: this.state.menuIsActive ? false : true })
  }
  render() {
    return (
      <div id="navContainer">
        <ul id="mobileNav">
          <li>
            <FontAwesomeIcon
              icon={faBars}
              style={{ color: "#707070" }}
              onClick={this.menuToggle}
            />
          </li>
          <li>
            <Link to="/">The Nerd Store</Link>
          </li>
          <li>
            {/* <ul id="socialGroup">
              <li>
                <FontAwesomeIcon icon={faFacebook} />
              </li>
              <li>
                <FontAwesomeIcon icon={faTwitter} />
              </li>
              <li>
                <FontAwesomeIcon icon={faInstagram} />
              </li>
            </ul> */}
          </li>
        </ul>
        <div
          id="menuContainer"
          style={{ display: this.state.menuIsActive ? "" : "none" }}
        >
          <ul id="dropMenu">
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
      </div>
    )
  }
}

export default NavMobile
