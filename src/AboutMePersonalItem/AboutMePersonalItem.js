import React, { Component } from 'react';
import './AboutMePersonalItem.css'
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class AboutMePersonalItem extends Component {
    
    render() {
        
        const { header, setId, id, stateId, list } = this.props;

        console.log('props are ', this.props)
        
        return ( 
            <section className="AboutMeParagraphItem" onClick={() => setId(id)}>
                <>
                    <div className="Item_Header">
                        <h4>{header}</h4>
                        <FontAwesomeIcon className={`AboutMe_Arrow ${stateId !== id ? "": "hidden"}`} icon={faAngleDown}/>
                        <FontAwesomeIcon className={`AboutMe_Arrow ${stateId === id ? "": "hidden"}`} icon={faAngleUp}/>
                    </div>
                    <div className="Item_List">
                        <ul className={`AboutMe_AnotherList ${stateId === id ? "" : "hidden"}`}>
                            <li className="AboutMe_ListItem">{`Thinkful's Software Engineering Immersive Program 2021 graduate specializing in Full-Stack Web Development`}</li>
                            <li className="AboutMe_ListItem">{`NYU Stern MBA 2018 graduate specializing in Corporate Finance and Financial Instruments & Markets`}</li>
                            <li className="AboutMe_ListItem">{`Lifelong passion for the game of basketball`}</li>
                            <li className="AboutMe_ListItem">{`Fan of the Brooklyn Nets & the New York Jets`}</li>
                            <li className="AboutMe_ListItem">{`Enjoy exercising and exploring new places`}</li>
                        </ul>
                    </div>
                </>


            </section>
         );
    }
}
 
export default AboutMePersonalItem;