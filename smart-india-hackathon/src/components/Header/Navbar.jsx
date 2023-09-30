import React, { useState } from "react";
import {
  Box,
  Button,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function ResponsiveNavbar() {
  const [mobileMenuAnchorEl, setMobileMenuAnchorEl] = useState(null);

  const handleMobileMenuOpen = (event) => {
    setMobileMenuAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Your Logo
        </Typography>

        {/* Hamburger Menu for Mobile */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleMobileMenuOpen}
          sx={{ display: { xs: "inline-block", sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>

        <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
          <Button color="inherit">
            <HomeIcon sx={{ marginRight: 1 }} />
            Home
          </Button>
          <Button color="inherit">
            <GroupIcon sx={{ marginRight: 1 }} />
            Community
          </Button>
        </Box>

        {/* Profile Button for Both Mobile and Desktop */}
        <IconButton
          color="inherit"
          aria-label="profile"
          onClick={handleMobileMenuOpen}
        >
          <AccountCircleIcon />
        </IconButton>

        {/* Mobile Menu */}
        <Menu
          anchorEl={mobileMenuAnchorEl}
          open={Boolean(mobileMenuAnchorEl)}
          onClose={handleMobileMenuClose}
          keepMounted
        >
          {/* Add profile menu items here */}
          <MenuItem onClick={handleMobileMenuClose}>
            <IconButton color="inherit" aria-label="profile">
              <AccountCircleIcon />
            </IconButton>
            Profile
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default ResponsiveNavbar;
