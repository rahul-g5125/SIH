import React from "react";
import styles from "./ProjectBox.module.css";
import stock_img1 from "../images/wallpapersden.com_macos-12-monterey-stock-dark_3840x2160.jpg";

export default function ProjectBox() {

  const imageClickHandler = (e)=> {
    e.view.window.location = "/profile";
  }

  return (
    <div className={styles.main_container}>
      <img className={styles.stock_img} src={stock_img1} alt="" />
      <p className={styles.project_title}>
        Library &nbsp;Management &nbsp;System
      </p>

      <div className={styles.project_details}>
        <p className={styles.student_name}>by &nbsp;Leslie &nbsp;D'silva</p>

        <div className={styles.rating_container}>
          <i class="fa-regular fa-star fa-xs">&nbsp;&nbsp;&nbsp;</i>
          <p className={styles.rating_number}>4.7</p>
        </div>
      </div>
    </div>
  );
}
