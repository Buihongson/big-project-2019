import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "../Components/Pages/HomePage";
import ContactPage from "../Components/Pages/ContactPage";

export class AppRouter extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/contact" component={ContactPage} />
      </Switch>
    );
  }
}

export default AppRouter;
