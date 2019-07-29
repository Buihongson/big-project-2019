import React, { Component } from "react";
import { BackTop } from 'antd';

import "./Home.css"

import Header from "../../Layouts/User/Header";
import Footer from "../../Layouts/User/Footer";
import UserRouter from "../../../Routers/UserRouter";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <UserRouter />
        <BackTop />
        <Footer />
      </div>
    );
  }
}

export default Home;
