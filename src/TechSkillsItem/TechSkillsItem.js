import React, { Component } from "react";

class TechSkillsItem extends Component {
  render() {
    const { image, title } = this.props;

    return (
      <div className="tech-skills-item">
        <div>
          <img
            className="tech-skills-icon"
            src={image}
            alt={`${title} Icon`}
          ></img>
        </div>
        <h6>{title}</h6>
      </div>
    );
  }
}

export default TechSkillsItem;
