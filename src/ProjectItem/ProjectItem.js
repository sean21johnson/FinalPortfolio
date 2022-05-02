import React, { Component } from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ProjectItem.css";

class ProjectItem extends Component {
	state = {};
	render() {
		const { image, title, github, live, description, techstack, position, isLink } = this.props;

		return (
			<div className="Project_Item">
				<div className="ProjectItem_Image_Div">
					<img className="Project_Image" src={image} alt={`${title} Pic`}></img>
				</div>
				<h5>{isLink ? <a href="https://www.zenhub.com/" target="_blank">ZenHub</a> : title}</h5>
				{position ? 
					<div className="position">
						<h3><strong>Frontend Engineer</strong></h3>
					</div>
				: null}
				<div className="ProjectItem_Info_Div">
					<div className="ProjectItem_Info_Description">
						<p className="ProjectItem_Paragraph">{description}</p>
					</div>
					{github !== null && github !== undefined ?
					<>
					<div className="ProjectItem_Info_Tech">
						<p className="ProjectItem_Paragraph">
							<strong className="Tech_strong">Tech Stack: </strong>
							{techstack}
						</p>
					</div>
					<div className="ProjectItem_Info_Buttons">
						<div className="Live_Link">
						<a
							href={live}
							target="_blank"
							rel="noreferrer"
						>
							<button className="Live_Button">VIEW LIVE</button>
						</a>
						</div>
						<div className="Repo_Link">
						<a
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
					</> : null}
				</div>
			</div>
		);
	}
}

export default ProjectItem;
