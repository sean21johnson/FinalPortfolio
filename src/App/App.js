import React, { Component } from "react";
import Footer from "./../Footer/Footer";
import "./App.css";
import PhotoSummary from "./../PhotoSummary/PhotoSummary";
import TechSkills from "./../TechSkills/TechSkills";
import Projects from "./../Projects/Projects";
import NavBar from './../NavBar/NavBar';
import AboutMeAccordian from './../AboutMeAccordian/AboutMeAccordian';

class App extends Component {
	state = {};
	render() {
		return (
			<>
				<section className="App">
					<NavBar></NavBar>
					<article id="About_Me">
						<div className="TopArea">
							<PhotoSummary></PhotoSummary>
							<AboutMeAccordian></AboutMeAccordian>
							{/* <AboutMe></AboutMe> */}
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
