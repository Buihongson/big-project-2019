import React from 'react'
import { Route, Switch } from "react-router-dom"

import AdminHome from "../Components/Admin/Pages/AdminHome/AdminHome";
import Catelogs from "../Components/Admin/Pages/Catelogs/CatelogPage";
import Products from "../Components/Admin/Pages/Products/ProductsPage";

export default () => (
  <Switch>
    <Route exact path="/admin" component={AdminHome}></Route>
    <Route exact path="/admin/catelogs" component={Catelogs}></Route>
    <Route exact path="/admin/products" component={Products}></Route>
  </Switch>
);
