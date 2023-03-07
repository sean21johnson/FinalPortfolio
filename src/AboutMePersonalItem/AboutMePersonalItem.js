import React, { Component } from "react";
import "./AboutMePersonalItem.css";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class AboutMePersonalItem extends Component {
  render() {
    const { header, setId, id, stateId } = this.props;

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
          <div className="Item_List">
            <ul
              className={`about-me-comprehensive-list ${
                stateId === id ? "" : "hidden"
              }`}
            >
              <li className="about-me-list-item">{`Thinkful's Software Engineering Immersive Program 2021 graduate specializing in Full-Stack Web Development`}</li>
              <li className="about-me-list-item">{`NYU Stern MBA 2018 graduate specializing in Corporate Finance and Financial Instruments & Markets`}</li>
              <li className="about-me-list-item">{`Lifelong passion for the game of basketball`}</li>
              <li className="about-me-list-item">{`Fan of the Brooklyn Nets & the New York Jets`}</li>
              <li className="about-me-list-item">{`Enjoy exercising and exploring new places`}</li>
            </ul>
          </div>
        </>
      </section>
    );
  }
}

export default AboutMePersonalItem;
