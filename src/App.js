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
import UserProfile from "./Pages/UserProfile";
import { Route } from "react-router-dom";

/*SHEHSAWAR*/
import firebase from './config/fire';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      useremail: null,
      display: "Login/Signup"
    }
    this.authlistener.bind(this);
  }

  componentDidMount(){
    this.authlistener();
  }

  authlistener(){
    firebase.auth().onAuthStateChanged((obj) => {
      if(obj) {
        this.setState({useremail: obj.email, display: obj.email});
      }
      else{
        this.setState({useremail: null, display: "Login/Signup"})
      }
    })
  }

  render(){
    return (
      <>
        <Route exact path="/"  render={(props) => <Home {...props} state={this.state}/>}></Route>
        <Route exact path="/trips" render={(props) => <Trips {...props} state={this.state}/>}></Route>
        <Route exact path="/travelagents" render={(props) => <TravelAgents {...props} state={this.state}/>}></Route>
        <Route exact path="/searchresults" render={(props) => <SearchResults {...props} state={this.state}/>}></Route>
        <Route exact path="/contactus" render={(props) => <ContactUs {...props} state={this.state}/>}></Route>
        <Route exact path="/login" render={(props) => <Login {...props} state={this.state}/>}></Route>
        <Route exact path="/login/signup/user" render={(props) => <SignUpUser {...props} state={this.state}/>}></Route>
        <Route exact path="/login/signup/agent" render={(props) => <SignUpAgent {...props} state={this.state}/>}></Route>
        <Route exact path="/user" render={(props) => <UserProfile {...props} state={this.state}/>}></Route>
      </>
    );
  }
  
}

export default App;
/*SHEHSAWAR*/
