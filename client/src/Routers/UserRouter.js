import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "../Components/User/Pages/HomePage";
import ContactPage from "../Components/User/Pages/ContactPage";
import BrandPage from "../Components/User/Pages/BrandPage";
import ProductDetails from "../Components/User/ProductDetails/ProductDetails";

export default () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/brand" component={BrandPage} />
    <Route exact path="/product/details/:id" component={ProductDetails} />
    <Route exact path="/contact" component={ContactPage} />
  </Switch>
);
