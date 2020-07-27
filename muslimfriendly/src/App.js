import React from "react";
import logo from "./images/moon.png";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

/* ----- Components ----- */
import NavBar from "./components/navbar.js";
import HomePage from "./components/landingPage/homepage.js";
function App() {
  return (
    <div className="App">
      <NavBar />
      <HomePage />
    </div>
  );
}

export default App;
