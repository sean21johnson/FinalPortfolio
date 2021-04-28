import React, { Component } from "react";
import ProjectItem from "./../ProjectItem/ProjectItem";
import "./Projects.css";

class Projects extends Component {
	state = {};
	render() {
		return (
			<article id="Projects">
				<section className="Projects">
					<h2 className="Projects_Header">Recent Projects</h2>
					<div className="Projects_List"></div>
					<ProjectItem
						image={`https://imgur.com/b8fWIpt.jpg`}
						title={`Address Hero`}
						github={`https://github.com/sean21johnson/AddressHero-Client `}
						live={`https://addresshero-client.vercel.app`}
						description={`Address Hero is a useful application for people who send cards in the mail. It was created to help users store the addresses of their contacts and a timeline component was built to keep track of cards that users have sent historically. I focused on identifying opportunities to further drive efficiency in the development process while building this app. With this in mind, I learned the importance of prudently selecting props when building reusable React components to enhance an application's flexibility & scalability.`}
						techstack={`React, NodeJS, Express, PostgreSQL, Jest, Mocha`}
					/>
					<ProjectItem
						image={`https://imgur.com/tG66y7K.jpg`}
						title={`Mangia`}
						github={`https://github.com/sean21johnson/mangia-client`}
						live={`https://mangia-client.vercel.app`}
						description={`Mangia was created to help people create and store memories of their favorite meals. The Mangia UI is centered around the food images that users store in
                                their meal collections. Click on a picture within your collection to view additional details of your experience or to edit/delete the memory. Building Mangia taught me how to use all CRUD functionalities of persistent storage and to think from the user's
                                perspective when designing the UI of an application.`}
						techstack={`React, NodeJS, Express, PostgreSQL, Jest, Mocha`}
					/>
					<ProjectItem
						image={`https://imgur.com/5BRzges.jpg`}
						title={`Learn More`}
						github={`https://github.com/sean21johnson/spacedRep-client`}
						live={`https://spaced-repetition-client-one.vercel.app/register`}
						description={`I built Learn More after reading about the spaced repetition learning technique. Users are presented a set of flashcards with Spanish words and have to guess 
                                the English translation. Newly introduced and more difficult words are shown more frequently, while older and less difficult words are shown less frequently. Implementing the spaced
                                repetition aspect of the flashcard presentation taught me how to effectively utilize a Linked List data structure.`}
						techstack={`React, NodeJS, Express, PostgreSQL, Cypress`}
					/>
					<ProjectItem
						image={`https://imgur.com/OMtD3lT.jpg`}
						title={`Petful`}
						github={`https://github.com/sean21johnson/petful-client`}
						live={`https://petful-client-nu-taupe.vercel.app/`}
						description={`Petful is a platform that was created to facilitate the adoption of cats and dogs. The primary goal was to make adopting a more 
                                efficient process by matching a pet with an owner every five seconds. Simply go to the site, enter your name in the user adoption queue, and wait your turn to adopt. Building this
                                taught me how to effectively use timing intervals in an application.`}
						techstack={`React, NodeJS, Express`}
					/>
				</section>
			</article>
		);
	}
}

export default Projects;
