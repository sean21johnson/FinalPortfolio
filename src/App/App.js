import React, { Component } from "react";
import Footer from "./../Footer/Footer";
import PhotoSummary from "./../PhotoSummary/PhotoSummary";
import TechSkills from "./../TechSkills/TechSkills";
import NavBar from "./../NavBar/NavBar";
import AboutMeAccordian from "./../AboutMeAccordian/AboutMeAccordian";
import Experience from "./../Experience/Experience";
import MyTwitter from "./../MyTwitter/MyTwitter";
import "./App.css";

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <section>
          <NavBar></NavBar>
          <article id="about-me">
            <div className="about-me-container">
              <PhotoSummary></PhotoSummary>
              <div className="accordion-tweets-container">
                <AboutMeAccordian></AboutMeAccordian>
                <MyTwitter></MyTwitter>
              </div>
            </div>
          </article>
          <Experience />
          <TechSkills></TechSkills>

          <Footer></Footer>
        </section>
      </>
    );
  }
}

export default App;
