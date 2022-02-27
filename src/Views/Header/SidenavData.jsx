import React from "react";
import {
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core"; 
import { NavLink } from "react-router-dom";
import { useStyles } from "./HeaderStyle";
import { FaUserAlt } from "react-icons/fa";
import DashboardIcon from "@material-ui/icons/Dashboard"; 
import PostAddIcon from "@material-ui/icons/PostAdd";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

export default function SidenavData({ handleDrawerClose }) {
  const classes = useStyles();
  const listItemData = [
    {
      label: "Dashboard",
      link: "/dashboard",
      icon: <DashboardIcon />
    }, 
    {
      label: "Feedbacks",
      link: "/feedbacks",
      icon: <PostAddIcon />
    },
    {
      label: "Notification",
      link: "/notifications",
      icon: <NotificationsActiveIcon />
    },
    {
      label: "User",
      link: "/user",
      icon: <FaUserAlt />
    },
    {
      label: "logout",
      link: "/",
      icon: <ExitToAppIcon />
    }
  ];

  return (
    <List>
      {listItemData.map((item, index) => (
        <Button
          size="small"
          onClick={() => handleDrawerClose()}
          className={classes.navButton}
        >
          <ListItem
            exact
            key={index}
            component={NavLink}
            to={item.link}
            className={classes.navlink}
            activeClassName={classes.selectedNav}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText>{item.label}</ListItemText>
          </ListItem>
        </Button>
      ))}
    </List>
  );
}
