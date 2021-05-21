import React from 'react';
import '../styles/About.css';
import Michelle from '../images/me-1.png'


const items = [
    {section:1, p:"Hi there! My name is Michelle, and I'm a software engineer based in San Francisco. I am enthusastic about creating products that deliver a great experience for users and paves a way for a positive impact on this earth and its habitants."}, 
    {section:2, p:"My background in environmental sciences fosters a unique affinity for complex interactions and the way systems work. My journey as a software developer has been nothing short of discovering complexities in fullstack applications. Check out my projects to see my work."}, 
    {section:3, p:"The question I've been asking myself is:", statement:"What did you learn today?"},
    {section:4, p:"A piece of advice I keep close to me right now is:", statement:"I have it within me right now, to get to where I want to be later."},
]

function About(){
    return(
        <div id="about" className="about">
            <h1>about me</h1>
            <div className="about-container">
                <div className="about-image">
                    <img src={Michelle} alt="Michelle"/>
                </div>
                <div className="about-info">
                    {items.map(item => {
                        return(
                            <div key={item.section}>
                            <br></br>
                            <p>{item.p}</p>
                            <br></br>
                            <span>{item.statement}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default About;