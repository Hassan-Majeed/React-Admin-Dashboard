import React from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Views/Footer";
import HearderComponent from "./Views/Header/HearderComponent";
import Login from "./Login";
import Forget from "./Forget";
import Verification from "./Verification";
import SetPassword from "./SetPassword";
import { Route, Switch } from "react-router-dom";  
function Routes() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <Login />} /> 
          <Route exact path="/forget" render={() => <Forget />} /> 
          <Route exact path="/verification" render={() => <Verification />} /> 
          <Route exact path="/setpassword" render={() => <SetPassword />} /> 
          <HearderComponent /> 
          <Footer />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default Routes;
