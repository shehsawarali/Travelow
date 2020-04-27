import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import Trips from "./Pages/Trips";
import TravelAgents from "./Pages/TravelAgents";
import SearchResults from "./Pages/SearchResults";
import ContactUs from "./Pages/ContactUs";
import Login from "./Pages/Login";
import SignUpUser from "./Pages/SignUpUser";
import SignUpAgent from "./Pages/SignUpAgent";
import { Route, Switch } from "react-router-dom";


function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/trips" component={Trips}></Route>
        <Route exact path="/travelagents" component={TravelAgents}></Route>
        <Route exact path="/searchresults" component={SearchResults}></Route>
        <Route exact path="/contactus" component={ContactUs}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/login/signup/user" component={SignUpUser}></Route>
        <Route exact path="/login/signup/agent" component={SignUpAgent}></Route>
      </Switch>
    </>
  );
}

export default App;
