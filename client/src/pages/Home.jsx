import React, { useState } from "react";

import Navbar from "../components/Header/Navbar";
import HeroSection from "../components/UI/HeroSection";
import ProjectSlider from "../components/Project/ProjectSlider";
import "../pages/Home.css";
import {
  Box,
  Grid,
  Select,
  MenuItem,
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
function Home() {
  const [age, setAge] = useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <Navbar />
      <HeroSection />
      <div className="search-bar">
        <Grid container>
          <Grid item xs={2}>
            <FormControl fullWidth>
              <Select
                sx={{ backgroundColor: "#fff" }}
                value={age}
                onChange={handleChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={10}>
            <OutlinedInput
              sx={{
                width: "100%",
                backgroundColor: "#fff",
              }}
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              }
            />
          </Grid>
        </Grid>
      </div>
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
