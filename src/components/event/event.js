import React from "react"
import "./event.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  fab,
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"

const Event = () => {
  return (
    <div className="event">
      <div className="eventDate">
        <p>Tuesday</p>
        <p>26</p>
      </div>
      <div className="eventMain">
        <p style={{ color: "black" }}>FNM</p>
        <p>Tuesday November 26, 2019 10am</p>
        <div className="eventDescription">
          <p>
            Description: Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
            Lorem ipsum dolor sit amet,
          </p>
        </div>
        <div className="shareEvent">
          <p>Share Event: </p>
          <ul className="shareButtons">
            <li>
              <FontAwesomeIcon icon={faFacebook} />
            </li>
            <li>
              <FontAwesomeIcon icon={faTwitter} />
            </li>
            <li>
              <FontAwesomeIcon icon={faInstagram} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Event
