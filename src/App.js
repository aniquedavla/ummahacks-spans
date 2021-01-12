import React, { useEffect } from "react";
import logo from "./images/moon.png";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
/* ----- Components ----- */
import NavBar from "./components/navbar.js";
import HomePage from "./pages/landingPage/homepage.js";
//import School from "./components/School.js";
// import Rate from "./components/Rate.js";
// import Thank from "./components/thankyou.js";
import NotFoundPage from "./pages/NotFoundPage.js"
import schoolData from "./data/schoolData.json";
import {
  createMuiTheme,
  responsiveFontSizes,
  MuiThemeProvider,
} from "@material-ui/core";
import ReactGA from "react-ga";
import withTracker from "./components/React-GA/withTracker";
import RateForm from "./pages/Rate/RateForm";
import SchoolViewRating from "./pages/ViewRating/SchoolViewRating.js"

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

function App() {
  useEffect(()=>{
    ReactGA.initialize("UA-84778445-2");
  });
  return (
    <div className="App">
    <MuiThemeProvider theme={theme}>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={withTracker(HomePage)} />
          {/* <Route exact path="/viewrating" component={SchoolViewRating}/> */}
          <Route exact path="/rate" component={withTracker(RateForm)} />
          <Route exact path="/viewrating/:schoolName" children={<SchoolViewRating />}></Route>
          {/* <Route exact path="/Rate" component={Rate} /> */}
          {/* <Route exact path="/thanks" component={Thank} /> */}
          <Route default path="/notfound" component={NotFoundPage}/>
        </Switch>
      </Router>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
