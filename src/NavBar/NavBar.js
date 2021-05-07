import React, { Component } from "react";
import * as ReactBootStrap from "react-bootstrap";
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Resume from "../Resume/SeanJohnson.Resume.pdf"
import "./NavBar.css";

class NavBar extends Component {
	state = {};
	render() {
		return (
			<ReactBootStrap.Navbar
				sticky="top"
				collapseOnSelect
				expand="md"
				className="Nav_Color"
				variant="dark"
			>
				<ReactBootStrap.Navbar.Brand className="Nav_Name">
					Sean Johnson
				</ReactBootStrap.Navbar.Brand>
				<ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
					<ReactBootStrap.Nav className="mr-auto">
						<ReactBootStrap.Nav.Link href="#About_Me">
							About Me
						</ReactBootStrap.Nav.Link>
						<ReactBootStrap.Nav.Link href="#Skills">
							Skills
						</ReactBootStrap.Nav.Link>
						<ReactBootStrap.Nav.Link href="#Projects">
							Projects
						</ReactBootStrap.Nav.Link>
						<ReactBootStrap.Nav.Link href={Resume} target="blank">
							Resume
						</ReactBootStrap.Nav.Link>
					</ReactBootStrap.Nav>
					<ReactBootStrap.Nav>
						<ReactBootStrap.Nav.Link href="mailto:seanjohnson220@gmail.com" target="blank">
							<FontAwesomeIcon className="nav-logo" icon={faEnvelopeSquare}/>
						</ReactBootStrap.Nav.Link>
						<ReactBootStrap.Nav.Link href="https://linkedin.com/in/seanjohnson220" target="blank">
							<FontAwesomeIcon className="nav-logo" icon={faLinkedin}/>
						</ReactBootStrap.Nav.Link>
						<ReactBootStrap.Nav.Link href="https://github.com/sean21johnson" target="blank">
							<FontAwesomeIcon className="nav-logo" icon={faGithub}/>
						</ReactBootStrap.Nav.Link>
						<ReactBootStrap.Nav.Link href="https://twitter.com/Sean21Johnson" target="blank">
							<FontAwesomeIcon className="nav-logo" icon={faTwitter}/>
						</ReactBootStrap.Nav.Link>
					</ReactBootStrap.Nav>
				</ReactBootStrap.Navbar.Collapse>
			</ReactBootStrap.Navbar>
		);
	}
}

export default NavBar;
