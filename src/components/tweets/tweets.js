import React from "react"
import "./tweets.scss"
import { Timeline } from "react-twitter-widgets"

const Tweets = () => (
  <div id="tweets">
    <Timeline
      dataSource={{
        sourceType: "profile",
        screenName: "wizards_magic",
      }}
      options={{
        username: "wizards_magic",
        height: "400",
        width: "1000",
        tweetLimit: "5",
        chrome: "nofooter noborders",
      }}
      noHeader="true"
      noBorders="true"
      noFooter="true"
    />
  </div>
)
export default Tweets
