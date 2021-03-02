import React, { Component } from "react";
import "./AboutMeCoreStackItem.css";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class AboutMeCoreStackItem extends Component {
	render() {
		const { header, setId, id, stateId } = this.props;

		return (
			<section className="AboutMeParagraphItem" onClick={() => setId(id)}>
				<>
					<div className="Item_Header">
						<h4>{header}</h4>
						<FontAwesomeIcon
							className={`AboutMe_Arrow ${stateId !== id ? "" : "hidden"}`}
							icon={faAngleDown}
						/>
						<FontAwesomeIcon
							className={`AboutMe_Arrow ${stateId === id ? "" : "hidden"}`}
							icon={faAngleUp}
						/>
					</div>
					<div className="Item_List">
						<ul className={`AboutMe_List ${stateId === id ? "" : "hidden"}`}>
							<li className="AboutMe_ListItem">
								<strong className="AboutMe_Strong">Front End: </strong>
								{`HTML, CSS, vanilla JavaScript, React, jQuery`}
							</li>
							<li className="AboutMe_ListItem">
								<strong className="AboutMe_Strong">Back End: </strong>
								{`NodeJS with Express`}
							</li>
							<li className="AboutMe_ListItem">
								<strong className="AboutMe_Strong">Database: </strong>
								{`SQL(mySQL)`}
							</li>
							<li className="AboutMe_ListItem">
								<strong className="AboutMe_Strong">Hosting: </strong>
								{`Heroku, Vercel`}
							</li>
							<li className="AboutMe_ListItem">
								<strong className="AboutMe_Strong">Testing: </strong>
								{`Jest on the Front End & Mocha/Chai on the Back End`}
							</li>
							<li className="AboutMe_ListItem">
								<strong className="AboutMe_Strong">Currently Learning: </strong>
								{`AWS`}
							</li>
						</ul>
					</div>
				</>
			</section>
		);
	}
}

export default AboutMeCoreStackItem;
