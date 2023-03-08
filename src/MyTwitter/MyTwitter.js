import React, { Component } from "react";
import "./MyTwitter.css";

class MyTwitter extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="mobile-twitter-container">
          <a
            className="twitter-timeline"
            data-width="300"
            data-height="300"
            data-show-replies="true"
            href="https://twitter.com/Sean21Johnson?ref_src=twsrc%5Etfw"
          >
            Tweets by Sean21Johnson
          </a>
        </div>
        <div className="twitter-container">
          <a
            className="twitter-timeline"
            data-width="450"
            data-height="300"
            data-show-replies="true"
            href="https://twitter.com/Sean21Johnson?ref_src=twsrc%5Etfw"
          >
            Tweets by Sean21Johnson
          </a>
        </div>
      </>
    );
  }
}

export default MyTwitter;
