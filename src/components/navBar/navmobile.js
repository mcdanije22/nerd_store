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
  }
  render() {
    return (
      <div id="navContainer">
        <ul id="mobileNav">
          <li>
            <FontAwesomeIcon icon={faBars} style={{ color: "#707070" }} />
          </li>
          <li>The Nerd Store</li>
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
      </div>
    )
  }
}

export default NavMobile
