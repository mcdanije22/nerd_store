import React from "react"
import "./event.scss"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { Link } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  fab,
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"

const Event = ({ event }) => {
  // const test = documentToReactComponents(event.description.json)
  const {
    eventName,
    eventTime,
    price,
    prize,
    slug,
    tagLine,
    description,
  } = event
  console.log(event)
  return (
    <div className="event">
      <div className="eventDate">
        <p>{eventTime.slice(0, 3)}</p>
        <p>{eventTime.slice(-18, -16)}</p>
      </div>
      <div className="eventMain">
        <Link to={`/events/${slug}`}>
          <p style={{ color: "#5091E8" }}>{eventName}</p>
        </Link>
        <p>{eventTime}</p>
        <div className="eventDescription">
          <p>{tagLine}</p>
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
