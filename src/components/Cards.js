import React from 'react';
import '../styles/Cards.css';
import CardItem from './CardItem';

import DarkMode from '../images/dark-mode.png';
import Teleport from '../images/teleport.png';
import Budge from '../images/budge.png';
import HRF from '../images/hrf.png';
import Plants from '../images/plants.png'

function Cards() {
  return (
    <div id="projects" className='cards'>
      <h1>projects</h1>
      <div className='cards__container'>
            <CardItem
              src={Teleport}
              text='Learn something from someone across the world!'
              label='Teleport'
              link='https://teleport-developersweek2021.vercel.app/'
            />
            <CardItem
              src={HRF}
              text='Visualize historical outcomes of national asylum cases.'
              label='Human Rights First'
              link='https://github.com/Lambda-School-Labs/human-rights-first-asylum-fe-a'
            />
            <CardItem
              src={Budge}
              text='Customize your budget app according to your needs.'
              label='Budge'
              link='https://github.com/budge-app'
            />
            <CardItem
              src={Plants}
              text='Become a plant parent to your perfect pandemic plant!'
              label='Perfect Pandemic Plants'
              link='https://perfectpandemicplant.vercel.app/'
            />
            <CardItem
              src={DarkMode}
              text='Track Cryptocurrency with the comfort of dark mode.'
              label='Crypto Tracker'
              link='https://dark-mode-vercel.vercel.app/'
            />
      </div>
    </div>
  );
}

export default Cards;
