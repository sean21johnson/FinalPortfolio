import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <header>
                <h1 className="Header_Title">
                    Sean Johnson
                </h1>
                <ul className="Header_UnorderedList">
                    <li className="Header_ListItem"><a className="anchor" href="#About_Me">About Me</a></li>
                    <li className="Header_ListItem"><a className="anchor" href="#Contact">Contact</a></li>
                    <li className="Header_ListItem"><a className="anchor" href="#Skills">Skills</a></li>
                    <li className="Header_ListItem"><a className="anchor" href="#Projects">Projects</a></li>
                </ul>
            </header>
         );
    }
}
 
export default Header;