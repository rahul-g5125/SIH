import React from "react";

// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import ProjectBox from "./ProjectBox";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "./ProjectSlider.module.css";
import image from "../images/hero-image.jpg";
import { Pagination, Navigation } from "swiper/modules";

export default function ProjectSlider() {
  let slides = [];
  for (let index = 0; index < 10; index++) {
    slides.push(
      <SwiperSlide>
        <ProjectBox />
      </SwiperSlide>
    );
  }

  const slidesComponents = slides.map((item, index) => {
    return item;
  });
  return (
    <div className={styles.slider}>
      <Swiper
        navigation={true}
        slidesPerView={5}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        breakpoints={{
          120: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 350,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 350,
          },
        }}
        className="mySwiper"
      >
        {slidesComponents}
      </Swiper>
    </div>
  );
}
