import React from "react"
import "./eventCard.scss"
import { Link } from "gatsby"

const EventCard = ({ event }) => {
  console.log(event)
  return (
    <Link to={`/events/${event.slug}`}>
      <div
        className="eventCardContainer"
        style={{
          backgroundImage: ` linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ), url(${event.eventImage.file.url})`,
        }}
        role="img"
        alt={event.eventName}
      >
        <div className="eventHeading">
          <h1>{event.eventName}</h1>
          <p>{event.eventTime}</p>
        </div>
      </div>
    </Link>
  )
}

export default EventCard
