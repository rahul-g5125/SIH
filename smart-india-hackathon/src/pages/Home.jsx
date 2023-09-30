import React from "react";

import Navbar from "../components/Header/Navbar";
import HeroSection from "../components/HeroSection";
import ProjectSlider from "../components/ProjectSlider";
import "../pages/Home.module.css";

function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <h1>Recommended</h1>
      <ProjectSlider />
      <h1>Top Trending</h1>
      <ProjectSlider />
      <h1>Recently Viewed</h1>
      <ProjectSlider />
    </div>
  );
}

export default Home;
