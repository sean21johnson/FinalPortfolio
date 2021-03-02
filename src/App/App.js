import React, { Component } from "react";
import Footer from "./../Footer/Footer";
import "./App.css";
import PhotoSummary from "./../PhotoSummary/PhotoSummary";
import AboutMe from "./../AboutMe/AboutMe";
import TechSkills from "./../TechSkills/TechSkills";
import Projects from "./../Projects/Projects";
import Header from "./../Header/Header";

class App extends Component {
	state = {};
	render() {
		return (
			<>
				<section className="App">
					<Header></Header>
					<article id="About_Me">
						<div className="TopArea">
							<PhotoSummary></PhotoSummary>
							<AboutMe></AboutMe>
						</div>
					</article>
					<TechSkills></TechSkills>
					<Projects></Projects>
					<Footer></Footer>
				</section>
			</>
		);
	}
}

export default App;
