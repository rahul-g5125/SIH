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
  const [profileMenuAnchorEl, setProfileMenuAnchorEl] = useState(null);

  const handleMobileMenuOpen = (event) => {
    setMobileMenuAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuAnchorEl(null);
  };

  const handleProfileMenuOpen = (event) => {
    setProfileMenuAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setProfileMenuAnchorEl(null);
  };

  return (
    <AppBar sx={{ backgroundColor: "#9EB384" }} position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, color: "#000" }}>
          Your Logo
        </Typography>

        {/* Hamburger Menu for Mobile */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleMobileMenuOpen}
          sx={{ display: { xs: "inline-block", sm: "none", color: "#000" } }}
        >
          <MenuIcon />
        </IconButton>

        <Box
          sx={{
            display: { sm: "block", xs: "none" },
          }}
        >
          <Button href="/" color="inherit">
            <HomeIcon sx={{ marginRight: 1, color: "#000" }} />
            <Typography variant="p" sx={{ color: "#000" }}>
              Home
            </Typography>
          </Button>
          <Button href="/community" color="inherit">
            <GroupIcon sx={{ marginRight: 1, color: "#000" }} />
            <Typography variant="p" sx={{ color: "#000" }}>
              Community
            </Typography>
          </Button>
        </Box>

        {/* Profile Button for Both Mobile and Desktop */}
        <IconButton
          color="inherit"
          aria-label="profile"
          sx={{ color: "#000" }}
          onClick={handleProfileMenuOpen}
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
          {/* Add Mobile menu items here */}

          <MenuItem>
            <Button href="/" color="inherit">
              <HomeIcon sx={{ marginRight: 1 }} />
              Home
            </Button>
          </MenuItem>
          <MenuItem>
            <Button href="/community" color="inherit">
              <GroupIcon sx={{ marginRight: 1 }} />
              Community
            </Button>
          </MenuItem>
        </Menu>
        {/* Profile Menu */}
        <Menu
          anchorEl={profileMenuAnchorEl}
          open={Boolean(profileMenuAnchorEl)}
          onClose={handleProfileMenuClose}
          keepMounted
        >
          {/* Add profile menu items here */}
          <MenuItem onClick={handleProfileMenuClose}>
            <Button href="/profile">My Profile</Button>
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default ResponsiveNavbar;
