import React from "react"
import "./eventCard.scss"

const EventCard = ({ event }) => {
  console.log(event)
  // console.log(event.eventImage.file.url)
  return (
    <div
      className="eventCardContainer"
      style={{
        backgroundImage: ` linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ), url(${event.eventImage.file.url})`,
      }}
    >
      <div className="eventHeading">
        <h1>{event.eventName}</h1>
        <p>{event.eventTime}</p>
      </div>
    </div>
  )
}

export default EventCard
