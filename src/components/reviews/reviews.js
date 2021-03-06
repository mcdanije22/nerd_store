import React from "react"
import "./reviews.scss"

const Reviews = () => (
  <div id="reviewListContainer">
    <h1>What people are saying</h1>
    <ul id="reviewList">
      <li>
        <p>
          "I just started playing magic and found this awesome local store. Rhob
          makes you feel like you are home and does what he can to help you out
          in any way shape or form. Plus everyone is super friendly.""
        </p>
        <h5>- Charles</h5>
      </li>
      <li>
        <p>
          "This is an amazing store. It is such a great community atmosphere and
          it begins with Rhob. He does such a good job of making everyone feel
          welcome and at home. I would highly recommend this to anyone looking
          for magic, card games, board games, or even just a gun place to hang
          out.""
        </p>
        <h5>- Graham</h5>
      </li>
      <li>
        <p>
          "If you're looking for a new local game store, you found it. If you're
          from out of town or new in town and want to make great friends that
          have your back, you found the spot. A family friendly PG environment
          that is clean, well lit and smells fresh; those last can be hard to
          find in a LGS but the nerd store delivers!""
        </p>
        <h5>- Jack</h5>
      </li>
    </ul>
    <h5>
      <a
        href="https://www.facebook.com/pg/TheNerdStoreMtMorris/reviews/?ref=page_internal"
        target="_blank"
        title="reviews"
      >
        See More...
      </a>
    </h5>
  </div>
)
export default Reviews
