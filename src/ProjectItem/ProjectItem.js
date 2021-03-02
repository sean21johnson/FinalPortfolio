import React, { Component } from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ProjectItem.css";

class ProjectItem extends Component {
	state = {};
	render() {
		const { image, title, github, live, description, techstack } = this.props;

		return (
			<div className="Project_Item">
				<div className="ProjectItem_Image_Div">
					<img className="Project_Image" src={image} alt={`${title} Pic`}></img>
				</div>
				<h5>{title}</h5>
				<div className="ProjectItem_Info_Div">
					<div className="ProjectItem_Info_Description">
						<p className="ProjectItem_Paragraph">{description}</p>
					</div>
					<div className="ProjectItem_Info_Tech">
						<p className="ProjectItem_Paragraph">
							<strong className="Tech_strong">Tech Stack: </strong>
							{techstack}
						</p>
					</div>
					<div className="ProjectItem_Info_Buttons">
						<a
							className="Live_Link"
							href={live}
							target="_blank"
							rel="noreferrer"
						>
							<button className="Live_Button">VIEW LIVE</button>
						</a>
						<a
							className="Repo_Link"
							href={github}
							target="_blank"
							rel="noreferrer"
						>
							<button className="Repo_Button">
								<FontAwesomeIcon
									className="logo_github_project"
									icon={faGithub}
								/>{" "}
								REPO
							</button>
						</a>
					</div>
				</div>
			</div>
		);
	}
}

export default ProjectItem;
