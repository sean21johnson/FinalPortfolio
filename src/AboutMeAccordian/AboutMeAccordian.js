import React, { Component } from "react";
import * as ReactBootStrap from "react-bootstrap";
import "./AboutMeAccordian.css";

class AboutMeAccordian extends Component {
  state = {};
  render() {
    return (
      <ReactBootStrap.Accordion className="accordion" defaultActiveKey="0">
        <ReactBootStrap.Card>
          <ReactBootStrap.Accordion.Toggle
            as={ReactBootStrap.Card.Header}
            eventKey="0"
            className="accordion-header"
          >
            Who Am I
          </ReactBootStrap.Accordion.Toggle>
          <ReactBootStrap.Accordion.Collapse eventKey="0">
            <ReactBootStrap.Card.Body className="accordion-body">
              Frontend engineer based in Philadelphia, PA who is skilled in
              writing clean, testable, and thoroughly documented code. NYU Stern
              MBA with a broad understanding of business.
            </ReactBootStrap.Card.Body>
          </ReactBootStrap.Accordion.Collapse>
        </ReactBootStrap.Card>

        <ReactBootStrap.Card>
          <ReactBootStrap.Accordion.Toggle
            as={ReactBootStrap.Card.Header}
            eventKey="1"
            className="accordion-header"
          >
            Current Role
          </ReactBootStrap.Accordion.Toggle>
          <ReactBootStrap.Accordion.Collapse eventKey="1">
            <ReactBootStrap.Card.Body className="accordion-body">
              <h4 className="role-header">
                Frontend Engineer @{" "}
                <a
                  href="https://www.zenhub.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  ZenHub
                </a>
              </h4>
              Delivered key contributions to ZenHub code base which improved UX
              & UI of the web application and browser extension. Utilized
              frontend technologies including React and TypeScript to build core
              product features that have driven user growth and retention.
            </ReactBootStrap.Card.Body>
          </ReactBootStrap.Accordion.Collapse>
        </ReactBootStrap.Card>

        <ReactBootStrap.Card>
          <ReactBootStrap.Accordion.Toggle
            as={ReactBootStrap.Card.Header}
            eventKey="2"
            className="accordion-header"
          >
            My Core Stack
          </ReactBootStrap.Accordion.Toggle>
          <ReactBootStrap.Accordion.Collapse eventKey="2">
            <ReactBootStrap.Card.Body className="accordion-body">
              <ul className="Accordian_List">
                <li>
                  <strong>Front End: </strong>JavaScript, React, TypeScript,
                  Redux, jQuery, HTML, CSS, Bootstrap
                </li>
                <li>
                  <strong>Back End: </strong>NodeJS with Express
                </li>
                <li>
                  <strong>Database: </strong>PostreSQL, MongoDB
                </li>
                <li>
                  <strong>Hosting: </strong>Heroku, Vercel, AWS
                </li>
                <li>
                  <strong>Testing: </strong>Jest/Enzyme/React Testing Library on
                  the frontend and Mocha/Chai on the backend
                </li>
              </ul>
            </ReactBootStrap.Card.Body>
          </ReactBootStrap.Accordion.Collapse>
        </ReactBootStrap.Card>
        <ReactBootStrap.Card>
          <ReactBootStrap.Accordion.Toggle
            as={ReactBootStrap.Card.Header}
            eventKey="3"
            className="accordion-header"
          >
            Teamwork
          </ReactBootStrap.Accordion.Toggle>
          <ReactBootStrap.Accordion.Collapse eventKey="3">
            <ReactBootStrap.Card.Body className="accordion-body">
              Team-oriented leader who builds outstanding relationships with
              clients and internal stakeholders by leveraging highly effective
              communication and interpersonal skills. I enjoy collaborating with
              and learning from other developers, and am a proponent of a
              communicative, team-based approach to problem solving. Diversity
              of thought yields the best and most creative solutions to
              challenging technical problems.
            </ReactBootStrap.Card.Body>
          </ReactBootStrap.Accordion.Collapse>
        </ReactBootStrap.Card>
        <ReactBootStrap.Card>
          <ReactBootStrap.Accordion.Toggle
            as={ReactBootStrap.Card.Header}
            eventKey="4"
            className="accordion-header"
          >
            Personal Facts
          </ReactBootStrap.Accordion.Toggle>
          <ReactBootStrap.Accordion.Collapse eventKey="4">
            <ReactBootStrap.Card.Body className="accordion-body">
              <ul className="Accordian_List">
                <li>Frontend Engineer @ ZenHub since October 2021</li>
                <li>
                  Thinkful Software Engineering Immersive Program 2021 graduate
                </li>
                <li>NYU Stern School of Business 2018 MBA graduate</li>
                <li>Lifelong passion for the game of basketball</li>
                <li>Enjoy exercising, traveling, and reading</li>
              </ul>
            </ReactBootStrap.Card.Body>
          </ReactBootStrap.Accordion.Collapse>
        </ReactBootStrap.Card>
      </ReactBootStrap.Accordion>
    );
  }
}

export default AboutMeAccordian;
