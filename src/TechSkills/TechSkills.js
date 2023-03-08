import React, { Component } from "react";
import "./TechSkills.css";
import TechSkillsItem from "./../TechSkillsItem/TechSkillsItem";

class TechSkills extends Component {
  state = {};
  render() {
    return (
      <article id="skills">
        <section className="tech-skills">
          <h2 className="tech-skills-title">Technical Skills</h2>
          <div className="tech-skills-list">
            <TechSkillsItem
              image={`https://imgur.com/Iq1dYKn.jpg`}
              title={`JavaScript`}
            />
            <TechSkillsItem
              image={`https://imgur.com/YFOy2Wc.jpg`}
              title={`React`}
            />
            <TechSkillsItem
              image={"https://imgur.com/Y4aC5AB.jpg"}
              title={"TypeScript"}
            />
            <TechSkillsItem
              image={`https://imgur.com/qICduIw.jpg`}
              title={`HTML`}
            />
            <TechSkillsItem
              image={`https://imgur.com/gWCK1Ee.jpg`}
              title={`CSS`}
            />
            <TechSkillsItem
              image={`https://imgur.com/cRU7LU3.jpg`}
              title={`Redux`}
            />
            <TechSkillsItem
              image={`https://imgur.com/9ZwiudL.jpg`}
              title={`React Testing Library`}
            />
            <TechSkillsItem
              image={`https://imgur.com/SqQAIoS.jpg`}
              title={`Bootstrap`}
            />
            <TechSkillsItem
              image={`https://imgur.com/dUw9l8p.jpg`}
              title={`NodeJS`}
            />
            <TechSkillsItem
              image={`https://imgur.com/voh5uf6.jpg`}
              title={`ExpressJS`}
            />
            <TechSkillsItem
              image={`https://imgur.com/fMMJYoB.jpg`}
              title={`Jest/Enzyme`}
            />
            <TechSkillsItem
              image={`https://imgur.com/ZmqYzcK.jpg`}
              title={`Mocha/Chai`}
            />
            <TechSkillsItem
              image={`https://imgur.com/QBlvy8i.jpg`}
              title={`SQL Databases`}
            />
            <TechSkillsItem
              image={`https://imgur.com/W3xbtxw.jpg`}
              title={`AWS`}
            />
          </div>
        </section>
      </article>
    );
  }
}

export default TechSkills;
