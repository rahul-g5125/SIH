import React from "react";
import Tags from "../components/Tags";
import Certificates from "../components/Certificates";
import Card from "../components/UI/Card";
import Socials from "../components/Socials";
import ProjectSlider from "../components/HomeSlider";
import Navbar from "../components/Header/Navbar";
import profilePhoto from "../images/circle-photo.jpg";
import styles from "./Profile.module.css";

function Profile() {
  return (
    <>
      <Navbar />
      <div className={styles["profile-main"]}>
        <div className={styles["left-section"]}>
          <Card>
            <div className={styles["first-left-section"]}>
              <div className={styles["profile"]}>
                <img
                  className={styles["profile-pic"]}
                  src={profilePhoto}
                  alt="My Profile Pic"
                />
              </div>
              <div className={styles["profile-info"]}>
                <h2>Jessica Rodriguez</h2>
                <h3>T.E. Computer Engineering</h3>
                <p>Fr. Conceicao Rodrigues College of Engineering - 2025</p>
              </div>
            </div>
            <div>
              <h2>Bio</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className={styles["second-left-section"]}></div>
            <h2>Skills</h2>
            <Tags />
            <div className={styles["third-left-section"]}>
              <h2>Certificates</h2>
              <Certificates />
            </div>
            <div className="fourth-left-section">
              <h2>Connect With me</h2>
              <Socials />
            </div>
          </Card>
        </div>

        <div className={styles["right-section"]}>
          <Card>
            <div className={styles["first-right-section"]}>
              <h1>Projects</h1>
              <ProjectSlider />
              <h1>Contributions</h1>
              <ProjectSlider />
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Profile;
