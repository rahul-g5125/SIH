import React, { useState } from "react";
import { Button } from "@mui/material";
import ProjectCard from "../Project/ProjectCard";
import "./Overlay.css"; // Import the CSS for styling

function Overlay() {
  const [isOpen, setIsOpen] = useState(false);

  const openOverlay = () => setIsOpen(true);
  const closeOverlay = () => setIsOpen(false);

  return (
    <>
      <Button sx={{ marginTop: 4, float: "right" }} onClick={openOverlay}>
        See All
      </Button>
      <div className={`overlay ${isOpen ? "open" : ""}`} onClick={closeOverlay}>
        <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <button onClick={closeOverlay}>Close</button>
        </div>
      </div>
    </>
  );
}

export default Overlay;
