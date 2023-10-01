import React from "react";

import Navbar from "../components/Header/Navbar";
import HeroSection from "../components/UI/HeroSection";
import ProjectSlider from "../components/Project/ProjectSlider";
import "../pages/Home.css";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <TextField
        id="input-with-icon-textfield"
        sx={{
          marginX: "auto",
          marginTop: -20,
          width: "50%",
          display: "flex",
          borderRadius: 2,
          backgroundColor: "#fff",
        }}
        variant="outlined"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      <h1 className="home-heading">Recommended</h1>
      <ProjectSlider />
      <h1 className="home-heading">Top &nbsp;Trending</h1>
      <ProjectSlider />
      <h1 className="home-heading">Recently &nbsp;Viewed</h1>
      <ProjectSlider />
    </div>
  );
}

export default Home;
