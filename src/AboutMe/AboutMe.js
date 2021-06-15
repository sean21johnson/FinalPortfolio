import React, { Component } from "react";
import AboutMeParagraphItem from "../AboutMeParagraphItem/AboutMeParagraphItem";
import AboutMePersonalItem from "../AboutMePersonalItem/AboutMePersonalItem";
import AboutMeCoreStackItem from "./../AboutMeCoreStackItem/AboutMeCoreStackItem";
import "./AboutMe.css";

class AboutMe extends Component {
	state = {
		id: null,
	};

	setId = (id) => {
		if (id === this.state.id) {
			this.setState({
				id: null,
			});
		} else {
			this.setState({
				id: id,
			});
		}
	};

	render() {
		const { id } = this.state;

		return (
			<section className="AboutMe">
				<AboutMeParagraphItem
					header={`Who Am I?`}
					description={`I am a web developer currently based in Manhattan, New York. NYU Stern MBA with ten years of professional experience in financial services, and 
                    a newfound passion for programming and software engineering. I am excited and motivated to bring FinTech value to a firm in 2021.`}
					id={"1"}
					setId={this.setId}
					stateId={id}
				/>
				<AboutMeCoreStackItem
					header={`My Core Stack`}
					id={"2"}
					setId={this.setId}
					stateId={id}
				/>
				<AboutMeParagraphItem
					header={`Teamwork`}
					description={`I enjoy collaborating with and learning from other developers and financial professionals. Proponent of a communicative, team-based approach
                    to problem-solving. Diversity of thought yields the best and most creative solutions to the problems we face.`}
					id={"4"}
					setId={this.setId}
					stateId={id}
				/>
				<AboutMePersonalItem
					header={"Personal Facts"}
					id={"3"}
					setId={this.setId}
					stateId={id}
				/>
			</section>
		);
	}
}

export default AboutMe;
