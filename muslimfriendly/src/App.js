import React from "react";
import logo from "./images/moon.png";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

/* ----- Components ----- */
import NavBar from "./components/navbar.js";
import HomePage from "./components/landingPage/homepage.js";
import School from "./components/school.js";
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/School" component={School} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
