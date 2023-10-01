import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import stock_img from "../images/landscape.jpg";
import HomeCard from "./HomeCard";
import "./HomeSlider.css";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";

function Arrowprev(props) {
  const { onClick } = props;
  return (
    <ArrowBackIosRoundedIcon
      sx={{ backgroundColor: "#CEDEBD", padding: 1, borderRadius: 50 }}
      onClick={onClick}
      className="prev_btn"
    />
  );
}

function Arrownext(props) {
  const { onClick } = props;
  return (
    <ArrowForwardIosRoundedIcon
      sx={{ backgroundColor: "#CEDEBD", padding: 1, borderRadius: 50 }}
      onClick={onClick}
      className="next_btn"
    />
  );
}

export default function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <Arrowprev />,
    nextArrow: <Arrownext />,
    responsive: [
      {
        breakpoint: 1400, // (desktop)
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1220, // (tablet)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 820, // (mobile)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: false,
          nextArrow: false,
        },
      },
    ],
  };

  return (
    <div className="main-container">
      <div className="carousel-container">
        <Slider {...settings}>
          <HomeCard img={stock_img} />
          <HomeCard img={stock_img} />
          <HomeCard img={stock_img} />
          <HomeCard img={stock_img} />
          <HomeCard img={stock_img} />
          <HomeCard img={stock_img} />
        </Slider>
      </div>
    </div>
  );
}
