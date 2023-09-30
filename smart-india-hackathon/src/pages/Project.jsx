import Authors from "../components/Authors";
import Navbar from "../components/Navbar";
import Description from "../components/Description";
import HomeSlider from "../components/HomeSlider";
import FolderIcon from "@mui/icons-material/Folder";
import { Button } from "@mui/material";
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
      <Button variant="contained">
        <FolderIcon /> Extra files
      </Button>
      <h1>More Projects like this:</h1>
      <HomeSlider />
    </>
  );
}
