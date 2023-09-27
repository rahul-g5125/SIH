import React from "react";

import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";

import ProjectSlider from "../components/ProjectSlider";

function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <h1>Recommended</h1>
      <ProjectSlider />
      <h1>Trending</h1>
      <ProjectSlider />
    </div>
  );
}

export default Home;
