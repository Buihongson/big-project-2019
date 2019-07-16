import React, { Component } from "react";

import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import AppRouter from "./Routers/AppRouter";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppRouter></AppRouter>
      </div>
    );
  }
}

export default App;
