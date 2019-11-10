import React, { Component } from "react"
import "./navmobile.scss"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

class NavMobile extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div id="navContainer">
        <ul id="mobileNav">
          <li>
            <FontAwesomeIcon icon={faBars} />
          </li>
          <li>The Nerd Store</li>
          <li>
            <ul id="secondGroup">
              <li>X</li>
              <li>X</li>
              <li>X</li>
            </ul>
          </li>
        </ul>
      </div>
    )
  }
}

export default NavMobile
