import React from "react"
import "./event.scss"
import { Link } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  fab,
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

const Event = ({ event }) => {
  const { eventName, eventTime, slug, tagLine } = event
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
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=https://relaxed-dijkstra-2f24bd.netlify.com/events/${slug}`}
                target="_blank"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
            <li>
              <a
                href={`http://www.twitter.com/share?url=https://relaxed-dijkstra-2f24bd.netlify.com/events/${slug}`}
                target="_blank"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Event
