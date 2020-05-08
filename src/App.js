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
import UploadTripPage from "./Pages/UploadTripPage";
import TravelAgentProfilePublic from "./Pages/TravelAgentProfilePublic";
import AgentProfileLoggedIn from "./Pages/TravelAgentProfileSignedIn";
import WriteReview from "./Pages/RatingAndReview";
import { Route } from "react-router-dom";

/*SHEHSAWAR*/
import firebase from "./config/fire";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.authlistener = this.authlistener.bind(this);
    this.state = {
      useremail: "",
      display: "Login/Signup",
      userType: "",
    };
  }

  componentWillMount() {
    this.authlistener();
  }

  authlistener() {
    firebase.auth().onAuthStateChanged((obj) => {
      if (obj) {
        this.setState({
          useremail: obj.email,
          display: obj.email,
          usertype: obj.userType,
        });
      } else {
        this.setState({
          useremail: null,
          display: "Login/Signup",
          userType: null,
        });
      }
    });
  }

  render() {
    return (
      <>
        <Route
          exact
          path="/"
          render={(props) => <Home {...props} state={this.state} />}
        ></Route>
        <Route
          exact
          path="/trips"
          render={(props) => <Trips {...props} state={this.state} />}
        ></Route>
        {/* Ayesha */}
        <Route
          exact
          path="/tripdetails"
          render={(props) => <TripDetails {...props} state={this.state} />}
        ></Route>

        <Route
          exact
          path="/travelagentprofilepublic"
          render={(props) => (
            <TravelAgentProfilePublic {...props} state={this.state} />
          )}
        ></Route>

        <Route
          exact
          path="/travelagentprofileloggedin"
          render={(props) => (
            <AgentProfileLoggedIn {...props} state={this.state} />
          )}
        ></Route>

        <Route
          exact
          path="/travelagents"
          render={(props) => <TravelAgents {...props} state={this.state} />}
        ></Route>
        <Route
          exact
          path="/searchresults"
          render={(props) => <SearchResults {...props} state={this.state} />}
        ></Route>
        <Route
          exact
          path="/contactus"
          render={(props) => <ContactUs {...props} state={this.state} />}
        ></Route>
        <Route
          exact
          path="/login"
          render={(props) => <Login {...props} state={this.state} />}
        ></Route>
        <Route
          exact
          path="/login/signup/user"
          render={(props) => <SignUpUser {...props} state={this.state} />}
        ></Route>
        <Route
          exact
          path="/login/signup/agent"
          render={(props) => <SignUpAgent {...props} state={this.state} />}
        ></Route>
        <Route
          exact
          path="/user"
          render={(props) => <UserProfile {...props} state={this.state} />}
        ></Route>
        <Route
          exact
          path="/uploadtrippage"
          render={(props) => <UploadTripPage {...props} state={this.state} />}
        ></Route>
        <Route
          exact
          path="/rateandreview"
          render={(props) => <WriteReview {...props} state={this.state} />}
        ></Route>
      </>
    );
  }
}

export default App;
/*SHEHSAWAR*/
