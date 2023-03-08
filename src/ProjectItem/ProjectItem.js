import React, { Component } from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ProjectItem.css";

class ProjectItem extends Component {
  state = {};
  render() {
    const {
      image,
      title,
      github,
      live,
      description,
      techstack,
      position,
      isLink,
    } = this.props;

    return (
      <div className="project">
        <div className="project-icon-container">
          <img className="project-icon" src={image} alt={`${title} Pic`}></img>
        </div>
        <h5>
          {isLink ? (
            <a href="https://www.zenhub.com/" target="_blank" rel="noreferrer">
              ZenHub
            </a>
          ) : (
            title
          )}
        </h5>
        {position ? (
          <div className="engineering-position">
            <h3>
              <strong>Associate Frontend Engineer</strong>
            </h3>
          </div>
        ) : null}
        <div className="project-description-container">
          <div className="project-description">
            <p className="project-description-blurb">{description}</p>
          </div>
          {github !== null && github !== undefined ? (
            <>
              <div className="project-tech-stack">
                <p className="project-description-blurb">
                  <strong className="tech-strong">Tech Stack: </strong>
                  {techstack}
                </p>
              </div>
              <div className="project-links-container">
                <div className="live-link-container">
                  <a href={live} target="_blank" rel="noreferrer">
                    <button className="live-button">VIEW LIVE</button>
                  </a>
                </div>
                <div className="repo-link">
                  <a href={github} target="_blank" rel="noreferrer">
                    <button className="repo-button">
                      <FontAwesomeIcon
                        className="logo_github_project"
                        icon={faGithub}
                      />{" "}
                      REPO
                    </button>
                  </a>
                </div>
              </div>
            </>
          ) : null}
        </div>
      </div>
    );
  }
}

export default ProjectItem;
