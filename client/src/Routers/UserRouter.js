import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "../Components/User/Pages/HomePage";
import ContactPage from "../Components/User/Pages/ContactPage";

export default () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/contact" component={ContactPage} />
  </Switch>
);
