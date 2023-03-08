import React, { Component } from "react";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./PhotoSummary.css";

class PhotoSummary extends Component {
  state = {};
  render() {
    return (
      <section className="photo-summary">
        <div className="headshot-container">
          <img
            className="headshot"
            src="https://imgur.com/7Xk4Ee8.jpg"
            alt="Me with beach town in the background"
          ></img>
        </div>
        <article id="Contact">
          <div className="bio-container">
            <h1 className="author">
              <strong>Sean Johnson</strong>
            </h1>
            <h3>
              <strong>Software Developer</strong>
            </h3>
            <p className="bio">
              Software developer who consistently delivers breakthrough results
              by utilizing creative problem-solving approaches, disciplined
              processes, and a resolute work ethic. Experienced in modern
              frontend toolsets, project management, and effective collaboration
              both with stakeholders and engineering colleagues.
            </p>
            <div className="bio-icons">
              <div className="linkedin-logo">
                <a
                  href="https://linkedin.com/in/seanjohnson220"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    aria-label="linkedIn logo"
                    className="logo-button  linkedin-logo-button"
                  >
                    <FontAwesomeIcon className="linkedin" icon={faLinkedin} />
                  </button>
                  <span className="sr-only">
                    Visit https://linkedin.com/in/seanjohnson220
                  </span>
                </a>
              </div>
              <div className="email-logo">
                <a
                  href="mailto:seanjohnson220@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    aria-label="email logo"
                    className="logo-button email-logo-button"
                  >
                    <FontAwesomeIcon
                      className="logo-email"
                      icon={faEnvelopeSquare}
                    />
                  </button>
                  <span className="sr-only">
                    Send mail to seanjohnson220@gmail.com
                  </span>
                </a>
              </div>
              <div className="github-logo">
                <a
                  href="https://github.com/sean21johnson"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    aria-label="github logo"
                    className="logo-button github-logo-button"
                  >
                    <FontAwesomeIcon className="logo-github" icon={faGithub} />
                  </button>
                  <span className="sr-only">
                    Visit https://github.com/sean21johnson
                  </span>
                </a>
              </div>
            </div>
          </div>
        </article>
      </section>
    );
  }
}

export default PhotoSummary;
