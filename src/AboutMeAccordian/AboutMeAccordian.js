import React, { Component } from "react";
import * as ReactBootStrap from "react-bootstrap";
import "./AboutMeAccordian.css"

class AboutMeAccordian extends Component {
	state = {};
	render() {
		return (
			<ReactBootStrap.Accordion className="theAccordian" defaultActiveKey="0">
				<ReactBootStrap.Card>
					<ReactBootStrap.Accordion.Toggle
						as={ReactBootStrap.Card.Header}
						eventKey="0"
                        className="Accordian_Header"
					>
						Who Am I?
					</ReactBootStrap.Accordion.Toggle>
					<ReactBootStrap.Accordion.Collapse eventKey="0">
						<ReactBootStrap.Card.Body
                        className="Accordian_Body">
							I am a software developer currently based in Manhattan,
							New York. In March 2021, I completed Thinkful's Software Engineering Immersive Program where I learned
                            full stack JavaScript and web development. I am looking for an opportunity to apply the programming skills that I have learned in a professional environment and am excited to add value to an engineering team.
						</ReactBootStrap.Card.Body>
					</ReactBootStrap.Accordion.Collapse>
				</ReactBootStrap.Card>
				<ReactBootStrap.Card>
					<ReactBootStrap.Accordion.Toggle
						as={ReactBootStrap.Card.Header}
						eventKey="1"
                        className="Accordian_Header"
					>
						My Core Stack
					</ReactBootStrap.Accordion.Toggle>
					<ReactBootStrap.Accordion.Collapse eventKey="1">
						<ReactBootStrap.Card.Body
                        className="Accordian_Body">
							<ul className="Accordian_List">
								<li>
									<strong>Front end: </strong>React, jQuery, vanilla JavaScript,
									Bootstrap, HTML, CSS
								</li>
								<li>
									<strong>Back end: </strong>NodeJS with Express
								</li>
								<li>
									<strong>Database: </strong>SQL(mySQL)
								</li>
								<li>
									<strong>Hosting: </strong>Heroku, Vercel
								</li>
								<li>
									<strong>Testing: </strong>Jest/Enzyme on the Front End and
									Mocha/Chai on the Back End
								</li>
								<li>
									<strong>Currently Learning: </strong>TypeScript
								</li>
							</ul>
						</ReactBootStrap.Card.Body>
					</ReactBootStrap.Accordion.Collapse>
				</ReactBootStrap.Card>
                <ReactBootStrap.Card>
					<ReactBootStrap.Accordion.Toggle
						as={ReactBootStrap.Card.Header}
						eventKey="2"
                        className="Accordian_Header"
					>
						Teamwork
					</ReactBootStrap.Accordion.Toggle>
					<ReactBootStrap.Accordion.Collapse eventKey="2">
						<ReactBootStrap.Card.Body
                        className="Accordian_Body">
                        I enjoy collaborating with and learning from other software developers. Proponent of a communicative, team-based approach
                    to problem solving. Diversity of thought yields the best and most creative solutions to the problems that we face.
						</ReactBootStrap.Card.Body>
					</ReactBootStrap.Accordion.Collapse>
				</ReactBootStrap.Card>
                <ReactBootStrap.Card>
					<ReactBootStrap.Accordion.Toggle
						as={ReactBootStrap.Card.Header}
						eventKey="3"
                        className="Accordian_Header"
					>
						Personal Facts
					</ReactBootStrap.Accordion.Toggle>
					<ReactBootStrap.Accordion.Collapse eventKey="3">
						<ReactBootStrap.Card.Body
                        className="Accordian_Body">
                        <ul className="Accordian_List">
                            <li>Thinkful's Software Engineering Immersive Program 2021 graduate specializing in full stack JavaScript & web development</li>
                            <li>NYU Stern's School of Business 2018 MBA graduate specializing in Corporate Finance and Financial Instruments & Markets</li>
                            <li>Lifelong passion for the game of basketball</li>
                            <li>Fan of the Brooklyn Nets & the New York Jets</li>
                            <li>Enjoy exercising and exploring new places</li>
                        </ul>
						</ReactBootStrap.Card.Body>
					</ReactBootStrap.Accordion.Collapse>
				</ReactBootStrap.Card>
			</ReactBootStrap.Accordion>
		);
	}
}

export default AboutMeAccordian;
