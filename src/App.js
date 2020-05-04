import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import Trips from "./Pages/Trips";
import TripDetails from "./Pages/TripDetails";
import TravelAgents from "./Pages/TravelAgents";
import SearchResults from "./Pages/SearchResults";
import ContactUs from "./Pages/ContactUs";
import Login from "./Pages/Login";
import SignUpUser from "./Pages/SignUpUser";
import SignUpAgent from "./Pages/SignUpAgent";
import UserProfile from "./Pages/UserProfile";
import { Route } from "react-router-dom";

function App() {
  return (
    <>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/trips" component={Trips}></Route>
      <Route exact path="/tripsdetails" component={TripDetails}></Route>
      <Route exact path="/travelagents" component={TravelAgents}></Route>
      <Route exact path="/searchresults" component={SearchResults}></Route>
      <Route exact path="/contactus" component={ContactUs}></Route>
      <Route exact path="/login" component={Login}></Route>
      <Route exact path="/login/signup/user" component={SignUpUser}></Route>
      <Route exact path="/login/signup/agent" component={SignUpAgent}></Route>
      <Route exact path="/user" component={UserProfile}></Route>
    </>
  );
}

export default App;
