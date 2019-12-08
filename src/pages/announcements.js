import React from "react"
import "./styles/announcements.scss"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Timeline } from "react-twitter-widgets"

const Announcements = () => (
  <Layout>
    <SEO title="Announcements" />
    <div id="announcements">
      <Timeline
        dataSource={{
          sourceType: "profile",
          screenName: "wizards_magic",
        }}
        options={{
          username: "wizards_magic",
          height: "400",
          width: "800",
          tweetLimit: "50",
          chrome: "nofooter noborders",
        }}
        noHeader="true"
        noBorders="true"
        noFooter="true"
      />
    </div>
  </Layout>
)

export default Announcements
