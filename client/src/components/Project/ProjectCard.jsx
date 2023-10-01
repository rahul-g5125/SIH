import React from "react";
import "./ProjectCard.css";

export default function HomeCard(props) {
  return (
    <a className="carousel-item" href="/project">
      <img src={props.img} alt="" />
      <p className="project-name">Library &nbsp;Management &nbsp;System</p>

      <div className="project-details">
        <p className="name">by &nbsp;Leslie &nbsp;D'silva</p>
        <div className="rating-details">
          <i className="fa-regular fa-star fa-xs">&nbsp;&nbsp;</i>
          <p className="rating-number">4.7</p>
        </div>
      </div>
    </a>
  );
}
