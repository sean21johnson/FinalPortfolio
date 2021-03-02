import React, { Component } from "react";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./PhotoSummary.css";

class PhotoSummary extends Component {
	state = {};
	render() {
		return (
			<section className="PhotoSummary">
				<div className="Personal_Pic_Div">
					<img
						className="Personal_Pic"
						src="https://imgur.com/coyRz4k.jpg"
						alt="Me with beach town in the background"
					></img>
				</div>
				<article id="Contact">
					<div className="PhotoSummary_Bio">
						<h1 className="Main_Name">Sean Johnson</h1>
						<h3>Web Developer</h3>
						<p className="PhotoSummary_Paragraph">
							Full-Stack web developer who consistently delivers breakthrough
							results by utilizing creative problem-solving approaches,
							disciplined processes, and a resolute work ethic. Team-oriented
							leader who builds outstanding relationships with internal
							stakeholders and external clients by leveraging highly effective
							communication and interpersonal skills.
						</p>
						<div className="PhotoSummary_Icons">
							<a
								className="linkedin_logo"
								href="https://linkedin.com/in/seanjohnson220"
								target="_blank"
								rel="noreferrer"
							>
								<button aria-label="linkedIn logo" className="logo_button  linkedin_logo_button">
									<FontAwesomeIcon className="linkedin" icon={faLinkedin} />
								</button>
								<span className="sr-only">Visit https://linkedin.com/in/seanjohnson220</span>
							</a>
							<a
								className="email_logo"
								href="mailto:seanjohnson220@gmail.com"
								target="_blank"
								rel="noreferrer"
							>
								<button aria-label="email logo" className="logo_button email_logo_button">
									<FontAwesomeIcon
										className="logo_email"
										icon={faEnvelopeSquare}
									/>
								</button>
								<span className="sr-only">Send mail to seanjohnson220@gmail.com</span>
							</a>
							<a
								className="github_logo"
								href="https://github.com/sean21johnson"
								target="_blank"
								rel="noreferrer"
							>
								<button aria-label="github logo" className="logo_button github_logo_button">
									<FontAwesomeIcon className="logo_github" icon={faGithub} />
								</button>
								<span className="sr-only">Visit https://github.com/sean21johnson</span>
							</a>
						</div>
					</div>
				</article>
			</section>
		);
	}
}

export default PhotoSummary;
