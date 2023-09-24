import React, { useState } from "react";
import styles from "./Navbar.module.css";

import { Drawer, IconButton, Toolbar, Typography, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const PageName = "Project Portal";
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav>
      <Toolbar>
        <IconButton onClick={toggleMenu} color="inherit">
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, textAlign: "center" }}
        >
          {PageName}
        </Typography>
      </Toolbar>
      <Drawer anchor="left" open={isOpen} onClose={toggleMenu}>
        <div role="presentation" onClick={toggleMenu} onKeyDown={toggleMenu}>
          <ul>
            <li>
              <Button href="/" variant="text">
                Home
              </Button>
            </li>
            <li>
              <Button href="/project" variant="text">
                Project Page
              </Button>
            </li>
            <li>
              <Button href="/profile" variant="text">
                Profile Page
              </Button>
            </li>
          </ul>
        </div>
      </Drawer>
    </nav>
  );
};
export default Navbar;
