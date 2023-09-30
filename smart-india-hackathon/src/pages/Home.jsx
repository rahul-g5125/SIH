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
      <h1 className="home-heading">Recommended</h1>
      <HomeSlider />
      <h1 className="home-heading">Top &nbsp;Trending</h1>
      <HomeSlider />
      <h1 className="home-heading">Recently &nbsp;Viewed</h1>
      <HomeSlider />
    </div>
  );
}

export default Home;
