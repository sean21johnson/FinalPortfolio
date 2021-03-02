import React, { Component } from 'react';
import './TechSkills.css';
import TechSkillsItem from './../TechSkillsItem/TechSkillsItem';

class TechSkills extends Component {
    state = {  }
    render() { 
        return ( 
            <article id="Skills">
                <section className="TechSkills">
                    <h2 className="TechnicalSkills_Header">Technical Skills</h2>
                        <div className="TechnicalSkills_List">
                            <TechSkillsItem
                                image={`https://imgur.com/qICduIw.jpg`}
                                title={`HTML`}
                            />
                            <TechSkillsItem
                                image={`https://imgur.com/gWCK1Ee.jpg`}
                                title={`CSS`}
                            />
                            <TechSkillsItem
                                image={`https://imgur.com/Iq1dYKn.jpg`}
                                title={`JavaScript`}
                            />
                            <TechSkillsItem
                                image={`https://imgur.com/YFOy2Wc.jpg`}
                                title={`React`}
                            />
                            <TechSkillsItem
                                image={`https://imgur.com/dUw9l8p.jpg`}
                                title={`NodeJS`}
                            />
                            <TechSkillsItem
                                image={`https://imgur.com/voh5uf6.jpg`}
                                title={`ExpressJS`}
                            />
                            <TechSkillsItem
                                image={`https://imgur.com/fMMJYoB.jpg`}
                                title={`Jest/Enzyme`}
                            />
                            <TechSkillsItem
                                image={`https://imgur.com/ZmqYzcK.jpg`}
                                title={`Mocha`}
                            />
                            <TechSkillsItem
                                image={`https://imgur.com/QBlvy8i.jpg`}
                                title={`SQL Databases`}
                            />
                            <TechSkillsItem
                                image={`https://imgur.com/W3xbtxw.jpg`}
                                title={`AWS`}
                            />
                        </div>
                </section>
            </article>
         );
    }
}
 
export default TechSkills;