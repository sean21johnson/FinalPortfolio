import React, { Component } from "react";
import "./AboutMeParagraphItem.css";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class AboutMeParagraphItem extends Component {
  render() {
    const { header, description, setId, id, stateId } = this.props;

    return (
      <section className="about-me-paragraph-item" onClick={() => setId(id)}>
        <>
          <div className="item-header">
            <h4>{header}</h4>
            <FontAwesomeIcon
              className={`about-me-arrow ${stateId !== id ? "" : "hidden"}`}
              icon={faAngleDown}
            />
            <FontAwesomeIcon
              className={`about-me-arrow ${stateId === id ? "" : "hidden"}`}
              icon={faAngleUp}
            />
          </div>
          <div className={`item-description ${stateId === id ? "" : "hidden"}`}>
            <p>{description}</p>
          </div>
        </>
      </section>
    );
  }
}

export default AboutMeParagraphItem;
