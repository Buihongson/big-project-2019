import React, { Component } from "react";

import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Header from "./Components/Layouts/Header";
import Footer from "./Components/Layouts/Footer";
import AppRouter from "./Routers/AppRouter";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <AppRouter />
        <Footer />
      </div>
    );
  }
}

export default App;
