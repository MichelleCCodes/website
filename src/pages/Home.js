import React from 'react';
import '../styles/App.css';
import HeroSection from '../components/HeroSection';
import About from '../components/About';
import Skills from '../components/Skills';
import Cards from '../components/Cards';


function Home() {
  return (
    <>
      <HeroSection />
      <About/>
      <Skills/>
      <Cards />
    </>
  );
}

export default Home;
