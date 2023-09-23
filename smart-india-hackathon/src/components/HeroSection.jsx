import React from "react";
import { Button, Container, Typography, Box } from "@mui/material";
import heroImage from "../images/hero-image.jpg";

const HeroSection = () => {
  return (
    <Container maxWidth="xxl">
      <Box
        sx={{
          backgroundImage: `url(${heroImage})`, // Set the path to your hero image
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "400px", // Adjust the height as needed
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "#fff",
        }}
      ></Box>
    </Container>
  );
};

export default HeroSection;
