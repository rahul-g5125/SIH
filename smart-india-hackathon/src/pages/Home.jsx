import React from "react";

import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";

import ProjectBox from "../components/ProjectBox";

import ProjecSlider from "../components/ProjectSlider";

function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />

      <ProjecSlider />
    </div>
  );
}

export default Home;
