import React, { Fragment } from "react";
import { Box } from "@material-ui/core";
import { Route, Switch } from "react-router-dom";
import { useStyles } from "./HeaderStyle";
import NavbarComponent from "./NavbarComponent";
import Sidenav from "./Sidenav";
import Notification from "./ActionTab/Notification";
import Dashboard from "../Dashboard/Dashboard";
import Link1 from "../Link1";
import Users from "../Users";  
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
          <Route exact path="/link1" render={() => <Link1 />} />
          <Route exact path="/user" render={() => <Users />} />
          <Route exact path="/notification" render={() => <Notification />} />
        </Switch>
      </Box>
    </Fragment>
  );
}
