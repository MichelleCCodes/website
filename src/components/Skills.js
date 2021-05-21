import React from 'react';
import '../styles/Skills.css'

import Css from '../images/css.svg'
import Figma from '../images/figma.svg'
import Git from '../images/git-icon.svg'
import Herokuu from '../images/herokuu.svg'
import Html from '../images/html5.svg'
import Javascript from '../images/javascript.svg'
import Less from '../images/less.svg'
import Node from '../images/node.svg'
import Postgres from '../images/postgresql.svg'
import Python from '../images/python.svg'
import Redux from '../images/redux.svg'
import Sqlite from '../images/sqlite3.png'
import Trello from '../images/trello.svg'
import ReactIcon from '../images/ReactIcon.svg'

const images = [
    {src:Css, title:"CSS"},
    {src:Figma, title:"Figma"},
    {src:Git, title:"Git"},
    {src:Herokuu, title:"Herokuu"},
    {src:Html, title:"HTML5"},
    {src:Javascript, title:"Javascript"},
    {src:Less, title:"Less"},
    {src:Node, title:"Node.js"},
    {src:Postgres, title:"Postgres"},
    {src:Python, title:"Python"},
    {src:Redux, title:"Redux"},
    {src:Sqlite, title:"Sqlite"}, 
    {src:Trello, title:"Trello"}, 
    {src:ReactIcon, title:"React.js"}
]

function Skills(){
    return(
        <div id="skills" className="skills">
            <h1>skills</h1>
                <div className="skills-subcontainer">        
                {images.map(item => {
                    return (
                        <img key={item.src} src={item.src} alt={item.title} title={item.title} className="skills-icon"/>
                    )
                })}
                </div>        
        </div>
    )
}

export default Skills;