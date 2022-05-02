import React, { Component } from "react";
import Footer from "./../Footer/Footer";
import PhotoSummary from "./../PhotoSummary/PhotoSummary";
import TechSkills from "./../TechSkills/TechSkills";
import Projects from "./../Projects/Projects";
import NavBar from './../NavBar/NavBar';
import AboutMeAccordian from './../AboutMeAccordian/AboutMeAccordian';
import Experience from './../Experience/Experience';
import MyTwitter from './../MyTwitter/MyTwitter';
import "./App.css";

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
							<div className="Top_Right">
							<AboutMeAccordian></AboutMeAccordian>
							<MyTwitter></MyTwitter>
							</div>
						</div>
					</article>
					<Experience />
					<TechSkills></TechSkills>
					<Projects></Projects>

					<Footer></Footer>
				</section>
			</>
		);
	}
}

export default App;
