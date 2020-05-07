//Page made by Ayesha
// css deatils can be found in tRipdrails.css in otherCssfiles folder

import React, { Component } from "react";
import NavBar from "../Components/navbar";
import TripData from "../Components/TripData";
import TripProerties from "../Components/TripInfoBar";
import UserReviewCard from "../Components/UserReview";
import "../OtherCssFiles/Tripdetails.css";
import { render } from "@testing-library/react";
import { withRouter } from 'react-router-dom';
import { Route } from "react-router-dom";



class Tripdetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.state,
      trip: this.props.location.state.trip
    }
    // console.log(this.props.trip);
    console.log(this.props.location.state);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.state !== this.state.user) {
      this.setState({user: nextProps.state});
    }
    else if(nextProps.trip !== this.state.trip){
      this.setState({trip: nextProps.trip});
      console.log(this.props.trip);
    }
  }

  render() {
    return (
      <div>
        <div class="hero-image-contact">
          <NavBar state={this.state.user}/>
          <div className="text">{this.props.location.state.trip.location}</div>
          {/* <div className="text1">By: agentName</div> */}
        </div>

        <div className="TripTop">
          <img
            className="TripImage2"
            src={require("../Images/bhawalpur.png")}
          ></img>
          <TripData trip={this.state.trip}/>
        </div>

        <TripProerties trip={this.state.trip}/>

        <div>
          <img
            className="backgrougImage"
            src={require("../Images/MountainBachground.jpg")}
          ></img>
        </div>

        <div className="MyReviews1">
          <h2>Reviews on previous trips</h2>
          <UserReviewCard />
          <UserReviewCard />
        </div>
      </div>
    );
  }
}

export default withRouter(Tripdetails);
