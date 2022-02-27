import React, { Fragment } from "react";
import { Box } from "@material-ui/core";
import { Route, Switch } from "react-router-dom";
import { useStyles } from "./HeaderStyle";
import NavbarComponent from "./NavbarComponent";
import Sidenav from "./Sidenav"; 
import Dashboard from "../Dashboard/Dashboard";
import Feedbacks from "../Feedbacks";
import Users from "../Users";  
import Notifications from "../Notifications";  
export default function HearderComponent() {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
    console.log("Helo");
  };
  const handleDrawerClose = () => {
    setMobileOpen(false);
    console.log("Helo");
  };
  return (
    <Fragment>
      <NavbarComponent handleDrawerToggle={handleDrawerToggle} />
      <Sidenav
        mobileOpen={mobileOpen}
        handleDrawerClose={handleDrawerClose}
        handleDrawerToggle={handleDrawerToggle}
      />
      <Box className={classes.wrapper}>
        <Switch>
          <Route exact path="/dashboard" render={() => <Dashboard />} />
          <Route exact path="/feedbacks" render={() => <Feedbacks />} />
          <Route exact path="/user" render={() => <Users />} />
          <Route exact path="/notifications" render={() => <Notifications />} />
        </Switch>
      </Box>
    </Fragment>
  );
}
