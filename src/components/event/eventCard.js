import React from "react"
import "./eventCard.scss"

const EventCard = ({ event }) => {
  console.log(event)
  // console.log(event.eventImage.file.url)
  return (
    <div
      className="eventCardContainer"
      // style={{ backgroundImage: `url(${event.eventImage.file.url})` }}
    >
      <div className="eventHeading">
        {/* <h1>{event.eventName}</h1>
        <p>{event.eventTime}</p> */}
      </div>
    </div>
  )
}

export default EventCard
