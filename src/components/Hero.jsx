import React from "react";
import HeroImg from "../assets/images/hero-img.avif";
import { HeroImage } from "../assets/styles/Hero";

function Hero() {
  return (
    <div>
      <HeroImage src={HeroImg} alt={HeroImg} />
      <h2></h2>
    </div>
  );
}

export default Hero;
