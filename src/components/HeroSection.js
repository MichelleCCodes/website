import React from "react";
import "../styles/App.css";
import { Button } from "./Button";
import "../styles/HeroSection.css";

function HeroSection() {
  return (
    <div id="home" className="hero-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <h1>Michelle Chen</h1>
      <p>Software Engineer</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          jump="https://docs.google.com/document/d/1z0HLpgZkopheVKhH6NYEcrcNCK9gT1fiWg8tS_PU_Ec/edit?usp=sharing"
        >
          Resume
        </Button>
        <Button
          jump="#projects"
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >See Projects
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
