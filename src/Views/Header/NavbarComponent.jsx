import React from "react";
import {
  AppBar,
  Box, 
  IconButton,
  Toolbar, 
} from "@material-ui/core";
import { useStyles } from "./HeaderStyle";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";

import Notification from "./ActionTab/Notification";
import Profile from "./ActionTab/Profile";
import Messages from "./ActionTab/Messages";
import logo from "../../images/logo.png"

export default function NavbarComponent({ handleDrawerToggle }) {
  const classes = useStyles();

  return (
    <AppBar>
      <Toolbar className={classes.toolbar}>
        <Box style={{ display: "flex" }}>
          <img src={logo} alt="logo" className="header-logo img-fluid" />
        </Box> 
        <Box>
          <Notification />
          <Messages />
          <Profile />
          <IconButton color="inherit" onClick={handleDrawerToggle}>
            <MenuRoundedIcon />
          </IconButton>
        </Box> 
      </Toolbar>
    </AppBar>
  );
}
