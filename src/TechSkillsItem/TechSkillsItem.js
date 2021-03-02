import React, { Component } from "react";

class TechSkillsItem extends Component {
	render() {
		const { image, title } = this.props;

		return (
			<div className="TechnicalSkills_Item">
				<div>
					<img
						className="TechnicalSkills_Image"
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
