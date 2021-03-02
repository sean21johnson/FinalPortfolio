import React, { Component } from "react";
import "./AboutMeParagraphItem.css";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class AboutMeParagraphItem extends Component {
	render() {
		const { header, description, setId, id, stateId } = this.props;

		return (
			<section className="AboutMeParagraphItem" onClick={() => setId(id)}>
				<>
					<div className="Item_Header ">
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
					<div className={`Item_Description ${stateId === id ? "" : "hidden"}`}>
						<p>{description}</p>
					</div>
				</>
			</section>
		);
	}
}

export default AboutMeParagraphItem;
