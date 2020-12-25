import React from "react";
import logo from "./images/moon.png";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
/* ----- Components ----- */
import NavBar from "./components/navbar.js";
import HomePage from "./components/landingPage/homepage.js";
import School from "./components/School.js";
import Rate from "./components/Rate.js";
import Thank from "./components/thankyou.js";
import NotFoundPage from "./pages/NotFoundPage.js"
import schoolData from "./data/schoolData.json";


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/school/:schoolName" render={(props)=>{
            let schoolPathName = props.location.pathname.replace("/school/","");
            let school = schoolData.filter((school)=>{
              return school.id == schoolPathName;
            });
            
            if(school[0] && school[0].id == schoolPathName){
              return (
                <School schoolData={school}/>
              )
            } else {
              return (<Redirect to="/notfound"></Redirect>);
            }
            
          }} />
          <Route exact path="/Rate" component={Rate} />
          <Route exact path="/thanks" component={Thank} />
          <Route default path="/notfound" component={NotFoundPage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
