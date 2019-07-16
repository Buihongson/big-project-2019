import React from "react";
import { Route, Switch } from "react-router-dom";

import ErrorPage from "../PureComponents/ErrorPage/ErrorPage"

let UserLayout,
  AdminLayout = null;

UserLayout = require("../Components/User/Home").default;
AdminLayout = require("../Components/Admin/Dashboard/Dashboard").default;

export default () => (
  <Switch>
    <Route path="/admin" component={AdminLayout} />
    <Route path="/" component={UserLayout} />
    <Route component={ErrorPage}></Route>
  </Switch>
);
