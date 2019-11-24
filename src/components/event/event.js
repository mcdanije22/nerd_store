import React from "react"
import "./event.scss"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  fab,
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"

const Event = ({ event }) => {
  // const test = documentToReactComponents(event.description.json)
  const { eventName, eventTime, price, prize, slug, description } = event
  // console.log(description.json.content[0].content[0].value)
  console.log(event)
  return (
    <div className="event">
      <div className="eventDate">
        <p>Tuesday</p>
        <p>26</p>
      </div>
      <div className="eventMain">
        <p style={{ color: "black" }}>{eventName}</p>
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
