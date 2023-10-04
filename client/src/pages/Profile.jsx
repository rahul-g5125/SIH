import React, { useState } from "react";
import Tags from "../components/UI/Tags";
import Certificates from "../components/Profile/Certificates";
import Card from "../components/UI/Card";
import Socials from "../components/Profile/Socials";
import Navbar from "../components/Header/Navbar";
import ProjectBox from "../components/Project/ProjectCard";
import PopOverlay from "../components/UI/PopOverlay";
import profilePhoto from "../images/circle-photo.png";
import styles from "./Profile.module.css";
import styled from "styled-components";
import { Box, Typography } from "@mui/material";

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
                <Box
                  sx={{
                    borderTopLeftRadius: 40,
                    borderTopRightRadius: 40,
                    backgroundColor: "#c0c0c0",
                    height: "150px",
                  }}
                ></Box>
                <div className={styles["profile-pic-box"]}>
                  <img
                    className={styles["profile-pic"]}
                    src={profilePhoto}
                    alt="My Profile Pic"
                  />
                </div>
                <Box sx={{ textAlign: "center" }}>
                  <Typography variant="h4" component="h2">
                    Rahul Gandla
                  </Typography>
                  <Typography variant="subtitle1">
                    T.E. Computer Engineering
                  </Typography>
                  <Typography variant="subtitle2">
                    Fr. Conceicao Rodrigues College of Engineering - 2025
                  </Typography>
                  <p>
                    A Full Stack Web Developer keen to solve real-life problems.
                  </p>
                </Box>
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
            <Typography
              variant="h3"
              sx={{ marginBottom: 5, textAlign: "center" }}
            >
              Projects
            </Typography>

            <div className={styles["projects"]}>
              <ProjectBox />
              <ProjectBox />
              <ProjectBox />
              <ProjectBox />
            </div>
            <PopOverlay />

            <Typography variant="h3" sx={{ marginY: 5, textAlign: "center" }}>
              Contributions
            </Typography>

            <div className={styles["projects"]}>
              <ProjectBox />
              <ProjectBox />
              <ProjectBox />
              <ProjectBox />
            </div>
            <PopOverlay />
          </div>
        </Card>
      </div>
    </>
  );
}

export default Profile;
