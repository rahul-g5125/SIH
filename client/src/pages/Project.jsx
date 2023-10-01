import Authors from "../components/ProjectPage/Authors";
import Navbar from "../components/Header/Navbar";
import Description from "../components/ProjectPage/Description";
import ProjectSlider from "../components/Project/ProjectSlider";
import FundForm from "../components/ProjectPage/FundForm";
import FolderIcon from "@mui/icons-material/Folder";
import { Button, Box, TextField, ButtonGroup } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import myImage from "../images/hero-image.jpg";
import styles from "./Project.module.css";

export default function Project() {
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <>
      <Navbar />
      <Slider {...settings}>
        <div className={styles["slick-slide"]}>
          <img src={myImage} alt="slick-slide" />
        </div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
      </Slider>
      <Authors />
      <Description />

      <Box sx={{ display: "flex", margin: 4 }}>
        <Button
          sx={{
            marginY: 5,
            marginLeft: "auto",
            marginRight: "auto",
            width: 200,
            height: "auto",
          }}
          variant="contained"
        >
          <FolderIcon sx={{ marginRight: 2 }} /> Extra files
        </Button>
      </Box>
      <h1>More Projects like this:</h1>
      <ProjectSlider />
      <FundForm />
    </>
  );
}
