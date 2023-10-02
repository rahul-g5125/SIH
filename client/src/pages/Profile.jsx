import React from "react";
import Tags from "../components/UI/Tags";
import Certificates from "../components/Profile/Certificates";
import Card from "../components/UI/Card";
import Socials from "../components/Profile/Socials";
import Navbar from "../components/Header/Navbar";
import ProjectBox from "../components/Project/ProjectCard";
import profilePhoto from "../images/circle-photo.png";
import styles from "./Profile.module.css";
import { Button } from "@mui/material";
import styled from "styled-components";

const Underline = styled.hr`
  margin: 10% auto;
  width: 80%;
`;

function Profile() {
  return (
    <>
      <Navbar />
      <div className={styles["profile-main"]}>
        <div>
          <Card>
            <div className={styles["left-section"]}>
              <div className={styles["profile"]}>
                <div>
                  <img
                    className={styles["profile-pic"]}
                    src={profilePhoto}
                    alt="My Profile Pic"
                  />
                </div>
                <div>
                  <h2>Rahul Gandla</h2>
                  <h3>T.E. Computer Engineering</h3>
                  <p>Fr. Conceicao Rodrigues College of Engineering - 2025</p>
                </div>
              </div>
              <Underline />
              <div>
                <h2>Bio</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
              <div className={styles["second-left-section"]}></div>
              <Underline />
              <h2>Skills</h2>
              <Tags />
              <Underline />
              <div className={styles["third-left-section"]}>
                <h2>Certificates</h2>
                <Certificates />
              </div>
              <Underline />
              <div className="fourth-left-section">
                <h2>Connect With me</h2>
                <Socials />
              </div>
            </div>
          </Card>
        </div>
        <Card>
          <div className={styles["right-section"]}>
            <Button sx={{ marginTop: 4, float: "right" }}>See all</Button>
            <h1>Projects</h1>

            <div className={styles["projects"]}>
              <ProjectBox />
              <ProjectBox />
              <ProjectBox />
              <ProjectBox />
            </div>
            <Button sx={{ marginTop: 4, float: "right" }}>See all</Button>
            <h1>Contributions</h1>

            <div className={styles["projects"]}>
              <ProjectBox />
              <ProjectBox />
              <ProjectBox />
              <ProjectBox />
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}

export default Profile;
