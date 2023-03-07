import React, { Component } from "react";
import ProjectItem from "./../ProjectItem/ProjectItem";
import "../Projects/Projects.css";

class Experience extends Component {
  state = {};
  render() {
    return (
      <div className="section_wrapper">
        <article id="experience">
          <section className="Projects Experience">
            <h2 className="Projects_Header">Experience</h2>
            <div className="Projects_List"></div>
            <ProjectItem
              image={`https://imgur.com/Vb91RcY.jpg`}
              title={`ZenHub`}
              position={"Frontend Engineer"}
              isLink
              description={`Collaborated with project managers, designers, 
                            QA specialists and fellow engineers to develop robust project management suite. Delivered key contributions to ZenHub code base which improved UX & UI 
                            of the web application and browser extension. Utilized frontend technologies 
                            including React and TypeScript to build core product features that have driven user growth and retention.`}
            />
          </section>
        </article>
      </div>
    );
  }
}

export default Experience;
